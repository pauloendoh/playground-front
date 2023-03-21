import { Box, MultiSelect, SelectItem, SelectItemProps } from '@mantine/core'
import { forwardRef, useMemo } from 'react'
import { FieldError, Merge } from 'react-hook-form'
import MyIssueLabelInput from '../../../../../hooks/react-query/monerate/issue-label/types/MyIssueLabelInput'
import { useIssueLabelsQuery } from '../../../../../hooks/react-query/monerate/issue-label/useIssueLabelsQuery'
import useIssueLabelModalStore from '../../../../../hooks/zustand/modals/useIssueLabelModalStore'

type Props = {
  issueLabelIds: string[]
  onChange: (issueLabelIds: string[]) => void
  inputWidth?: number
  errors?: Merge<FieldError, (FieldError | undefined)[]> | undefined
}

const IssueLabelsSelector = (props: Props) => {
  const { data: issueLabels } = useIssueLabelsQuery()
  const { openModal } = useIssueLabelModalStore()

  const items = useMemo(() => {
    const items =
      issueLabels?.map(
        (issueLabel) =>
          ({
            label: issueLabel?.name,
            value: issueLabel?.id,
          } as SelectItem)
      ) || []

    return [
      {
        label: '+ Add Label',
        value: '-1',
      },
      ...items,
    ]
  }, [issueLabels])

  return (
    <MultiSelect
      maw={240}
      data={items}
      value={props.issueLabelIds}
      onChange={(values) => {
        if (values.includes('-1')) {
          openModal(new MyIssueLabelInput())
          return
        }
        props.onChange(values)
      }}
      searchable
      itemComponent={Item}
      placeholder="Pick Labels"
      label="Labels"
      error={props.errors?.message}
    />
  )
}

const Item = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, value, ...others }, ref) => {
    return (
      <div ref={ref} {...others}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <div>{label}</div>
        </Box>
      </div>
    )
  }
)

export default IssueLabelsSelector
