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
import MyIssueLabelInput from '../../../../hooks/react-query/monerate/issue-label/types/MyIssueLabelInput'
import { useSaveIssueLabelMutation } from '../../../../hooks/react-query/monerate/issue-label/useSaveIssueLabelMutation'
import { useRecipesQuery } from '../../../../hooks/react-query/recipe/useRecipesQuery'

type Props = {
  isOpen: boolean
  initialValue?: MyIssueLabelInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyIssueLabelInput)

export default function IssueLabelModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setFocus,
    reset,
    watch,
    setValue,
  } = useForm<MyIssueLabelInput>({
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

  const { mutate: submitCreateRecipe } = useSaveIssueLabelMutation()

  const onSubmit = (data: MyIssueLabelInput) => {
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
              {props.initialValue?.id ? 'Edit Label' : 'Create Label'}
            </Title>
            {props.initialValue?.id ? //   afterDelete={() => props.onClose()} //   input={props.initialValue} // <IssueLabelMoreMenu
            // />
            null : (
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
                autoComplete="off"
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
