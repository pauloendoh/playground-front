import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import {
  CloseButton,
  Flex,
  Grid,
  Modal,
  NumberInput,
  Textarea,
  Title,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSaveIssueMutation } from '../../../../hooks/react-query/monerate/issue/useSaveIssueMutation'
import { MyIssueInput } from '../../../../types/domains/monerate/issue/MyIssueInput'
import FlexCol from '../../flex/FlexCol'
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
            <Grid.Col md={6}>
              <Textarea
                label="Issue Name"
                {...register('title')}
                autosize
                minRows={2}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <Textarea
                label="Solution"
                {...register('solution')}
                autosize
                minRows={2}
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={6} md={3}>
              <NumberInput
                label="Frequency"
                value={watch('frequency') || 1}
                min={1}
                max={5}
                onChange={(value) => setValue('frequency', value || 1)}
              />
            </Grid.Col>
            <Grid.Col span={6} md={3}>
              <NumberInput
                label="Intensity"
                value={watch('intensity') || 1}
                min={1}
                max={5}
                onChange={(value) => setValue('intensity', value || 1)}
              />
            </Grid.Col>

            <Grid.Col span={6} md={3}>
              <FlexCol>
                <DateInput
                  label="Solved at"
                  value={
                    watch('solvedAt')
                      ? new Date(String(watch('solvedAt')))
                      : null
                  }
                  onChange={(date) =>
                    setValue('solvedAt', date?.toISOString() || null)
                  }
                />
              </FlexCol>
            </Grid.Col>

            <Grid.Col span={12}>
              <IssueLabelsSelector
                issueLabelIds={watch('labelIds') || []}
                onChange={(labelIds) => setValue('labelIds', labelIds)}
                errors={errors.labelIds}
              />
            </Grid.Col>
          </Grid>

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
