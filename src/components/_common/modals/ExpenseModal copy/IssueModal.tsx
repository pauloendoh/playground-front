import { CloseButton, Flex, Grid, Modal, Textarea, Title } from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveIssueMutation } from '../../../../hooks/react-query/monerate/issue/useSaveIssueMutation'
import { MyIssueValidInput } from '../../../../types/domains/monerate/issue/MyIssueValidInput'
import MyTextInput from '../../inputs/MyTextInput'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'

type Props = {
  isOpen: boolean
  initialValue?: MyIssueValidInput
  onClose: () => void
}

export default function IssueModal(props: Props) {
  const { register, handleSubmit, setFocus, reset, watch, setValue } =
    useForm<MyIssueValidInput>({
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

  const { mutate: submitSave, isLoading } = useSaveIssueMutation()

  const onSubmit = (data: MyIssueValidInput) => {
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
              {props.initialValue?.id ? 'Edit Issue' : 'Create Issue'}
            </Title>
            {props.initialValue?.id ? null : ( // /> //   afterDelete={() => props.onClose()} //   input={props.initialValue} // <IssueMoreMenu
              <CloseButton onClick={() => props.onClose()} />
            )}
          </Flex>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Col span={9}>
              <MyTextInput label="Issue Name" {...register('title')} />
            </Grid.Col>
          </Grid>

          <Textarea
            mt={16}
            label="Description"
            {...register('solution')}
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
