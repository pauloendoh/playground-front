import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  ActionIcon,
  Button,
  CloseButton,
  Flex,
  Grid,
  Input,
  Modal,
  Rating,
  Textarea,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineBookmark } from 'react-icons/md'
import { useCreateRecipeMutation } from '../../../../hooks/react-query/recipe/useCreateRecipeMutation'
import { useRecipesQuery } from '../../../../hooks/react-query/recipe/useRecipesQuery'
import { MyRecipeInput } from '../../../../types/domains/recipe/MyRecipeInput'
import { RecipeMoreMenu } from './RecipeMoreMenu/RecipeMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyRecipeInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyRecipeInput)

export default function RecipeModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
    watch,
    setValue,
  } = useForm<MyRecipeInput>({
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

  const onSubmit = (data: MyRecipeInput) => {
    submitCreateRecipe(data, {
      onSuccess: () => {
        props.onClose()
      },
    })
  }

  const { data: recipes } = useRecipesQuery()

  const savedRecipes = useMemo(
    () => recipes?.filter((recipe) => recipe.savedPosition) || [],
    [recipes]
  )

  const theme = useMantineTheme()

  return (
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
          <Grid.Col span={12}>
            <Textarea
              autosize
              label="Title"
              {...register('title')}
              error={errors.title?.message}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <Input.Wrapper label="Saved">
              <ActionIcon
                mt={4}
                onClick={() => {
                  const current = watch('savedPosition')
                  if (current) {
                    setValue('savedPosition', null)
                    return
                  }

                  setValue('savedPosition', savedRecipes.length + 1)
                }}
              >
                <MdOutlineBookmark
                  color={
                    watch('savedPosition') ? theme.colors.pink[5] : undefined
                  }
                />
              </ActionIcon>
            </Input.Wrapper>
          </Grid.Col>

          <Grid.Col span={4}>
            <Input.Wrapper label="Rating">
              <Rating
                value={watch('rating') || undefined}
                onChange={(value) => setValue('rating', value)}
                mt={8}
              />
            </Input.Wrapper>
          </Grid.Col>
        </Grid>

        <Textarea
          mt={16}
          autosize
          label="Description"
          {...register('description')}
          error={errors.description?.message}
        />

        <Flex align="center" justify="space-between" mt={16}>
          <Button type="submit">Save</Button>
        </Flex>
      </form>
    </Modal>
  )
}
