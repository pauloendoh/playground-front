import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Button, CloseButton, Flex, Grid, Modal, Title } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveSavingMutation } from '../../../../hooks/react-query/monerate/saving/useSaveSavingMutation'
import { MySavingValidInput } from '../../../../types/domains/monerate/saving/MySavingValidInput'
import MyTextInput from '../../inputs/MyTextInput'
import { SavingMoreMenu } from './SavingMoreMenu/SavingMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MySavingValidInput
  onClose: () => void
}

const resolver = classValidatorResolver(MySavingValidInput)

export default function SavingModal(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
    setValue,
  } = useForm<MySavingValidInput>({
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

  const { mutate: submitSave } = useSaveSavingMutation()

  const onSubmit = (data: MySavingValidInput) => {
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
          <Grid>
            <Grid.Col span={6}>
              <MyTextInput
                label="Value"
                type="number"
                {...register('value')}
                error={errors.value?.message}
                step="any"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DateInput
                placeholder="Pick date"
                label="Date"
                value={
                  props.initialValue?.date
                    ? new Date(props.initialValue?.date)
                    : undefined
                }
                valueFormat="MMM DD, YYYY"
                onChange={(date) => {
                  setValue('date', date?.toISOString() || null)
                }}
              />
            </Grid.Col>
          </Grid>

          <Flex align="center" justify="space-between" mt={16}>
            <Button type="submit">Save</Button>
          </Flex>
        </form>
      </Modal>
    </>
  )
}
