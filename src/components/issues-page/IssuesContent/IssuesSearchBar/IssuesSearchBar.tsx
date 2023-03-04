import {
  Autocomplete,
  AutocompleteItem,
  SelectItemProps,
  Text,
} from '@mantine/core'
import { forwardRef, useMemo, useState } from 'react'
import { useIssuesQuery } from '../../../../hooks/react-query/monerate/issue/useIssuesQuery'
import useIssueModalStore from '../../../../hooks/zustand/modals/useIssueModalStore'

type Props = {}

type MyAutocompleteItem = AutocompleteItem & {
  label: string
  isSolved: boolean
}

const IssuesSearchBar = (props: Props) => {
  const [text, setText] = useState('')

  const { data } = useIssuesQuery()

  const items = useMemo<MyAutocompleteItem[]>(() => {
    return (
      data?.map((issueLabel) => {
        return {
          label: issueLabel.title,
          value: issueLabel.id,
          isSolved: issueLabel.isSolved,
        }
      }) || []
    )
  }, [data])

  const { openModal } = useIssueModalStore()

  return (
    <Autocomplete
      value={text}
      onChange={(text) => {
        setText(text)
      }}
      filter={(query, item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      }}
      onItemSubmit={(item) => {
        setText('')
        const issue = data?.find((issue) => issue.id === item.value)
        if (issue) {
          openModal({
            ...issue,
            labelIds: issue.labels?.map((label) => label.id) || [],
          })
        }
      }}
      data={items}
      placeholder={'Search issues'}
      itemComponent={AutoCompleteItem}
    />
  )
}

type ItemProps = SelectItemProps & MyAutocompleteItem

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, isSolved, ...props }, ref) => (
    <div ref={ref} {...props}>
      <Text
        sx={{
          // strike through
          textDecoration: isSolved ? 'line-through' : 'none',
          color: isSolved ? 'gray' : 'inherit',
        }}
      >
        {label}
      </Text>
    </div>
  )
)

export default IssuesSearchBar
