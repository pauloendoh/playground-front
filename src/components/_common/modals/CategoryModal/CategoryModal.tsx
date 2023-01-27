import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  Button,
  CloseButton,
  ColorInput,
  Flex,
  Grid,
  Modal,
  TextInput,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MyCategoryInput } from '../../../../hooks/react-query/monerate/category/types/MyCategoryInput'
import { useSaveCategoryMutation } from '../../../../hooks/react-query/monerate/category/useSaveCategoryMutation'
import { useRecipesQuery } from '../../../../hooks/react-query/recipe/useRecipesQuery'
import { CategoryMoreMenu } from './CategoryMoreMenu/CategoryMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyCategoryInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyCategoryInput)

export default function CategoryModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setFocus,
    reset,
    watch,
    setValue,
  } = useForm<MyCategoryInput>({
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

  const { mutate: submitCreateRecipe } = useSaveCategoryMutation()

  const onSubmit = (data: MyCategoryInput) => {
    submitCreateRecipe(data, {
      onSuccess: () => {
        props.onClose()
      },
    })
  }

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
              {props.initialValue?.id ? 'Edit Category' : 'Create Category'}
            </Title>
            {props.initialValue?.id ? (
              <CategoryMoreMenu
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
              <TextInput
                label="Name"
                {...register('name')}
                error={errors.name?.message}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <ColorInput
                placeholder="Pick color"
                label="Your favorite color"
                onChange={(value) => setValue('bgColor', value)}
                value={watch('bgColor')}
              />
            </Grid.Col>
            <Grid.Col span={2}></Grid.Col>
          </Grid>

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Modal>
    </>
  )
}
