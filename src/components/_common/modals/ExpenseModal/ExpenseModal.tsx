import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  CloseButton,
  Flex,
  Grid,
  Modal,
  NumberInput,
  Textarea,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveExpenseMutation } from '../../../../hooks/react-query/monerate/expense/useSaveExpenseMutation'
import useExpenseFilterStore from '../../../../hooks/zustand/useExpenseFilterStore'
import { MyExpenseInput } from '../../../../types/domains/monerate/expense/MyExpenseInput'
import { useValueInHoursSpan } from '../../../monerate-page/ExpensesContent/RecurrentExpensesSection/ExpenseButtonItem/useValueInHoursLabel/useValueInHoursLabel'
import MyTextInput from '../../inputs/MyTextInput'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'
import { Span } from '../../text/Span'
import CategoriesSelector from './CategoriesSelector/CategoriesSelector'
import { ExpenseMoreMenu } from './ExpenseMoreMenu/ExpenseMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyExpenseInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyExpenseInput)

export default function ExpenseModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    setFocus,
    reset,
    watch,
    setValue,
  } = useForm<MyExpenseInput>({
    resolver,
    defaultValues: props.initialValue,
  })

  useEffect(() => {
    if (props.isOpen) {
      setTimeout(() => {
        setFocus('name')
        reset(props.initialValue)
      }, 100)
    }
  }, [props.isOpen])

  const filter = useExpenseFilterStore((s) => s.filter)
  const { mutate: submitSave, isLoading } = useSaveExpenseMutation(filter)

  const onSubmit = (data: MyExpenseInput) => {
    submitSave(data, {
      onSuccess: () => {
        props.onClose()
      },
    })
  }

  const handleClose = () => {
    if (isDirty && !confirm('Are you sure you want to close?')) {
      return
    }

    props.onClose()
  }

  const valueInHoursLabel = useValueInHoursSpan(Number(watch('value')), {
    showMinutes: true,
    hideTildePrefix: true,
  })

  return (
    <Modal
      opened={props.isOpen}
      onClose={handleClose}
      withCloseButton={false}
      size="xl"
      styles={{
        title: {
          width: '100%',
        },
      }}
      title={
        <Flex align={'center'} justify="space-between">
          <Title order={3}>
            {props.initialValue?.id ? 'Edit Expense' : 'Create Expense'}
          </Title>
          {props.initialValue?.id ? (
            <ExpenseMoreMenu
              input={props.initialValue}
              afterDelete={() => props.onClose()}
            />
          ) : (
            <CloseButton onClick={handleClose} />
          )}
        </Flex>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Col span={9}>
            <MyTextInput
              label="Expense Name"
              {...register('name')}
              error={errors.name?.message}
            />
          </Grid.Col>

          <Grid.Col span={3}>
            <MyTextInput
              label={
                <Span>
                  Value{' '}
                  {valueInHoursLabel && (
                    <Span color="yellow" size="sm">
                      ({valueInHoursLabel} of work)
                    </Span>
                  )}
                </Span>
              }
              type="number"
              {...register('value')}
              error={errors.value?.message}
            />
          </Grid.Col>

          <Grid.Col span={2}>
            <NumberInput
              label="⭐ Benefit Score"
              onChange={(value) => {
                if (value === '') {
                  setValue('benefitScore', null)
                  return
                }
                setValue('benefitScore', value)
              }}
              precision={1}
              value={watch('benefitScore') ?? ''}
              error={errors.benefitScore?.message}
              max={5}
              min={0}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <NumberInput
              label="⭐ Cost score"
              onChange={(value) => {
                if (value === '') {
                  setValue('costScore', null)
                  return
                }
                setValue('costScore', value)
              }}
              value={watch('costScore') ?? ''}
              error={errors.costScore?.message}
              precision={1}
              max={5}
              min={0}
            />
          </Grid.Col>

          <Grid.Col span={2}>
            <MyTextInput
              label="Times per month"
              type="number"
              step="any"
              value={watch('timesPerMonth') || ''}
              onChange={(e) => {
                const number = parseFloat(e.target.value)
                if (number >= 0) {
                  setValue('timesPerMonth', number.toString())
                  return
                }
                setValue('timesPerMonth', null)
              }}
              error={errors.timesPerMonth?.message}
            />
          </Grid.Col>

          <Grid.Col span={'auto'}>
            <CategoriesSelector
              categoryIds={watch('categoryIds') || []}
              onChange={(categoryIds) => setValue('categoryIds', categoryIds)}
            />
          </Grid.Col>
        </Grid>

        <Textarea
          mt={16}
          label="Description"
          {...register('description')}
          error={errors.description?.message}
          autosize
          minRows={2}
        />

        <Flex align="center" justify="space-between" mt={16}>
          <SaveCancelButtons
            onCancel={handleClose}
            onEnabledAndCtrlEnter={handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
        </Flex>
      </form>
    </Modal>
  )
}
