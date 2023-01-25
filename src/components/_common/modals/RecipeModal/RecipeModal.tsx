import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  Button,
  CloseButton,
  Flex,
  Grid,
  Input,
  Modal,
  Rating,
  TextInput,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateRecipeMutation } from '../../../../hooks/react-query/recipe/useCreateRecipeMutation'
import { MyRecipeValidInput } from '../../../../types/domains/recipe/MyRecipeValidInput'
import { RecipeMoreMenu } from './RecipeMoreMenu/RecipeMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyRecipeValidInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyRecipeValidInput)

export default function RecipeModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
    watch,
    setValue,
  } = useForm<MyRecipeValidInput>({
    resolver,
    defaultValues: props.initialValue,
  })

  useEffect(() => {
    if (props.isOpen) {
      setTimeout(() => {
        setFocus('title')
        reset(props.initialValue)
      }, 100)
    }
  }, [props.isOpen])

  const { mutate: submitCreateRecipe } = useCreateRecipeMutation()

  const onSubmit = (data: MyRecipeValidInput) => {
    submitCreateRecipe(data, {
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
        size="md"
        styles={{
          title: {
            width: '100%',
          },
        }}
        title={
          <Flex align={'center'} justify="space-between">
            <Title order={3}>
              {props.initialValue?.id ? 'Edit Recipe' : 'Create Recipe'}
            </Title>
            {props.initialValue?.id ? (
              <RecipeMoreMenu
                recipe={props.initialValue}
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
              <TextInput
                label="Title"
                {...register('title')}
                error={errors.title?.message}
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
          </Grid>

          <TextInput
            label="Description"
            {...register('description')}
            error={errors.description?.message}
          />

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Modal>
    </>
  )
}
