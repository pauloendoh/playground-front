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
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveExpenseMutation } from '../../../../hooks/react-query/monerate/expense/useSaveExpenseMutation'
import { useRecipesQuery } from '../../../../hooks/react-query/recipe/useRecipesQuery'
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

  const { mutate: submitCreateRecipe, isLoading } = useSaveExpenseMutation()

  const onSubmit = (data: MyExpenseInput) => {
    submitCreateRecipe(data, {
      onSuccess: () => {
        props.onClose()
      },
    })
  }

  const disabled = useMemo(() => {
    return !isValid
  }, [isValid])

  const { data: recipes } = useRecipesQuery()

  return (
    <>
      <Modal
        opened={props.isOpen}
        onClose={() => props.onClose()}
        withCloseButton={false}
        size="md"
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
            <Grid.Col span={6}>
              <MyTextInput
                label="Expense Name"
                {...register('name')}
                error={errors.name?.message}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <MyTextInput
                label="Value"
                {...register('value')}
                error={errors.value?.message}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Input.Wrapper label="Rating">
                <Rating
                  value={watch('rating') || undefined}
                  onChange={(value) => setValue('rating', value)}
                  mt={8}
                />
              </Input.Wrapper>
            </Grid.Col>
            <Grid.Col span={6}>
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
