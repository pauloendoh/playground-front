import { Flex } from '@mantine/core'
import { useMemo } from 'react'
import { IssueFragment } from '../../../../../graphql/generated/graphql'
import { useIssueLabelsQuery } from '../../../../../hooks/react-query/monerate/issue-label/useIssueLabelsQuery'
import useIssueModalStore from '../../../../../hooks/zustand/modals/useIssueModalStore'

type Props = {
  issue: IssueFragment
}

const IssuesTableRow = ({ issue }: Props) => {
  const { openModal } = useIssueModalStore()
  const { data: labels } = useIssueLabelsQuery()

  const visibleLabels = useMemo(() => {
    // where issue.labels
    return (
      labels?.filter((label) =>
        issue.labels?.some((issueLabel) => issueLabel.id === label.id)
      ) || []
    )
  }, [labels, issue])

  return (
    <tr
      onClick={() => {
        openModal({
          ...issue,
          labelIds: issue.labels?.map((label) => label.id) || [],
        })
      }}
    >
      <td>{issue.position}</td>
      <td>{issue.title}</td>
      {/* <td>{issue.isSolved ? 'Yes' : 'No'}</td> */}
      <td>{issue.solution}</td>
      <td>
        <Flex wrap={'wrap'} gap={2}>
          {visibleLabels.map((label) => (
            <span
              key={label.id}
              style={{
                backgroundColor: label.bgColor,
                padding: '4px 12px',
                borderRadius: 4,
                marginRight: 4,
              }}
            >
              {label.name}
            </span>
          ))}
        </Flex>
      </td>
      {/* <td>{isue.labels?.map((label) => label.name).join(', ')}</td> */}
    </tr>
  )
}

export default IssuesTableRow
