import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  Button,
  CloseButton,
  Flex,
  Modal,
  TextInput,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveCurrentSavingMutation } from '../../../../hooks/domains/monerate/current-saving/useSaveCurrentSavingMutation'
import { MyCurrentSavingValidInput } from '../../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'
import { SavingMoreMenu } from './SavingMoreMenu/SavingMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyCurrentSavingValidInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyCurrentSavingValidInput)

export default function CurrentSavingModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm<MyCurrentSavingValidInput>({
    resolver,
    defaultValues: props.initialValue,
  })

  useEffect(() => {
    if (props.isOpen) {
      setTimeout(() => {
        setFocus('value')
        reset(props.initialValue)
      }, 100)
    }
  }, [props.isOpen])

  const { mutate: submitSave } = useSaveCurrentSavingMutation()

  const onSubmit = (data: MyCurrentSavingValidInput) => {
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
        styles={{
          title: {
            width: '100%',
          },
        }}
        title={
          <Flex align={'center'} justify="space-between">
            <Title order={3}>
              {props.initialValue?.id ? 'Edit Saving' : 'Create Saving'}
            </Title>
            {props.initialValue?.id ? (
              <SavingMoreMenu
                saving={props.initialValue}
                afterDelete={() => props.onClose()}
              />
            ) : (
              <CloseButton onClick={() => props.onClose()} />
            )}
          </Flex>
        }
        size="xs"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Value"
            type="number"
            {...register('value', {
              valueAsNumber: true,
            })}
            error={errors.value?.message}
            step="any"
          />

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Modal>
    </>
  )
}
