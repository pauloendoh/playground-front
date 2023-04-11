import {
  Autocomplete,
  AutocompleteItem,
  Flex,
  SelectItemProps,
  Text,
} from '@mantine/core'
import multiwordSearch from 'endoh-utils/dist/text/multiwordSearch'

import { forwardRef, useMemo, useState } from 'react'
import { useIssuesQuery } from '../../../../hooks/react-query/monerate/issue/useIssuesQuery'
import useIssueModalStore from '../../../../hooks/zustand/modals/useIssueModalStore'

type Props = {}

type MyAutocompleteItem = AutocompleteItem & {
  label: string
  isSolved: boolean
  solution: string
  multiplication: number
}

const IssuesSearchBar = (props: Props) => {
  const [text, setText] = useState('')

  const { data } = useIssuesQuery()

  const items = useMemo<MyAutocompleteItem[]>(() => {
    if (text === '') return []
    return (
      data
        ?.map((issueLabel) => {
          return {
            label: issueLabel.title,
            value: issueLabel.id,
            isSolved: issueLabel.isSolved,
            solution: issueLabel.solution,
            multiplication: issueLabel.frequency * issueLabel.intensity,
          }
        })
        .sort((a, b) => b.multiplication - a.multiplication) || []
    )
  }, [data, text])

  const { openModal } = useIssueModalStore()

  return (
    <Autocomplete
      label="Search"
      value={text}
      onChange={(text) => {
        setText(text)
      }}
      filter={(query, item: MyAutocompleteItem) => {
        return (
          multiwordSearch(item.label, query) ||
          multiwordSearch(item.solution, query)
        )
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
      maw={300}
      data={items}
      placeholder={'Search issues'}
      itemComponent={AutoCompleteItem}
    />
  )
}

type ItemProps = SelectItemProps & MyAutocompleteItem

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ label, isSolved, multiplication, ...props }, ref) => (
    <div ref={ref} {...props}>
      <Flex
        gap={8}
        sx={{
          // strike through
          textDecoration: isSolved ? 'line-through' : 'none',
          color: isSolved ? 'gray' : 'inherit',
        }}
      >
        <Text>{multiplication}</Text>

        <Text>{label}</Text>
      </Flex>
    </div>
  )
)

export default IssuesSearchBar
