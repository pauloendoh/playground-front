import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  Checkbox,
  CloseButton,
  Flex,
  Grid,
  Modal,
  Textarea,
  Title,
} from '@mantine/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveIssueMutation } from '../../../../hooks/react-query/monerate/issue/useSaveIssueMutation'
import { MyIssueInput } from '../../../../types/domains/monerate/issue/MyIssueInput'
import FlexVCenter from '../../flex/FlexVCenter'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'
import IssueLabelsSelector from './IssueLabelsSelector/IssueLabelsSelector'
import { IssueMoreMenu } from './IssueMoreMenu/IssueMoreMenu'

type Props = {
  isOpen: boolean
  initialValue?: MyIssueInput
  onClose: () => void
}

const resolver = classValidatorResolver(MyIssueInput)

export default function IssueModal(props: Props) {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<MyIssueInput>({
    defaultValues: props.initialValue,
    resolver,
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
          <Grid>
            <Grid.Col span={6}>
              <Textarea
                label="Issue Name"
                {...register('title')}
                autosize
                minRows={2}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                label="Solution"
                {...register('solution')}
                autosize
                minRows={2}
              />
            </Grid.Col>
          </Grid>

          <FlexVCenter justify={'space-between'} mt={16}>
            <Checkbox
              label={'Solved'}
              checked={watch('isSolved')}
              onChange={(event) =>
                setValue('isSolved', event.currentTarget.checked)
              }
            />

            <FlexVCenter gap={16}>
              <IssueLabelsSelector
                issueLabelIds={watch('labelIds') || []}
                onChange={(labelIds) => setValue('labelIds', labelIds)}
                errors={errors.labelIds}
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
