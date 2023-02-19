import {
  Checkbox,
  CloseButton,
  Flex,
  Modal,
  Textarea,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveIssueMutation } from '../../../../hooks/react-query/monerate/issue/useSaveIssueMutation'
import { MyIssueInput } from '../../../../types/domains/monerate/issue/MyIssueValidInput'
import FlexVCenter from '../../flex/FlexVCenter'
import MyTextInput from '../../inputs/MyTextInput'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'
import IssueLabelsSelector from './IssueLabelsSelector/IssueLabelsSelector'
import { IssueMoreMenu } from './IssueMoreMenu/IssueMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyIssueInput
  onClose: () => void
}

export default function IssueModal(props: Props) {
  const { register, handleSubmit, setFocus, reset, watch, setValue } =
    useForm<MyIssueInput>({
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

  const onSubmit = (data: MyIssueInput) => {
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
            {props.initialValue?.id ? (
              <IssueMoreMenu
                afterDelete={() => props.onClose()}
                input={props.initialValue}
              />
            ) : (
              <CloseButton onClick={() => props.onClose()} />
            )}
          </Flex>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyTextInput label="Issue Name" {...register('title')} />

          <Textarea
            mt={16}
            label="Description"
            {...register('solution')}
            autosize
            minRows={2}
          />

          <FlexVCenter justify={'space-between'} mt={16}>
            <Checkbox
              label={watch('isSolved') ? 'Solved' : 'Not Solved'}
              checked={watch('isSolved')}
              onChange={(event) =>
                setValue('isSolved', event.currentTarget.checked)
              }
            />

            <FlexVCenter gap={16}>
              <IssueLabelsSelector
                issueLabelIds={watch('labelIds') || []}
                onChange={(labelIds) => setValue('labelIds', labelIds)}
              />
            </FlexVCenter>
          </FlexVCenter>

          <Flex align="center" justify="space-between" mt={24}>
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
