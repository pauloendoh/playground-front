import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  CloseButton,
  Flex,
  Grid,
  Input,
  Modal,
  Rating,
  Textarea,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveExpenseMutation } from '../../../../hooks/react-query/monerate/expense/useSaveExpenseMutation'
import useExpenseFilterStore from '../../../../hooks/zustand/useExpenseFilterStore'
import { MyExpenseInput } from '../../../../types/domains/monerate/expense/MyExpenseInput'
import MyTextInput from '../../inputs/MyTextInput'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'
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
    formState: { errors, isValid },
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

  return (
    <>
      <Modal
        opened={props.isOpen}
        onClose={() => props.onClose()}
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
              <CloseButton onClick={() => props.onClose()} />
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
                label="Value"
                type="number"
                {...register('value')}
                error={errors.value?.message}
              />
            </Grid.Col>

            <Grid.Col span={2}>
              <Input.Wrapper label="Rating">
                <Rating
                  value={watch('rating') || undefined}
                  onChange={(value) => setValue('rating', value)}
                  mt={8}
                />
              </Input.Wrapper>
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
              onCancel={() => props.onClose()}
              onEnabledAndCtrlEnter={handleSubmit(onSubmit)}
              isLoading={isLoading}
            />
          </Flex>
        </form>
      </Modal>
    </>
  )
}
