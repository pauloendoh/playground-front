import { Table } from '@mantine/core'
import { useMemo } from 'react'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import useIssueFilterStore from '../../../../hooks/zustand/useIssueFilterStore'
import IssuesTableRow from './IssuesTableRow/IssuesTableRow'

type Props = {
  issues: IssueFragment[]
}

const IssuesTable = (props: Props) => {
  const { filterByIsSolved } = useIssueFilterStore()

  const visibleIssues = useMemo(() => {
    return props.issues
      .filter((issue) => {
        return issue.isSolved === filterByIsSolved
      })
      .sort(
        (a, b) =>
          // position
          a.position - b.position
      )
  }, [props.issues, filterByIsSolved])

  return (
    <Table
      highlightOnHover
      sx={(theme) => ({
        'tbody > tr': {
          cursor: 'pointer',
          ':hover td': {
            backgroundColor: theme.colors.dark[4],
          },
        },
      })}
    >
      <thead>
        <tr>
          <th style={{ width: 40 }}>#</th>
          <th style={{ width: 240 }}>Issue</th>
          <th style={{ width: 40 }}>Solved</th>
          <th style={{ width: 240 }}>Solution</th>
          <th>Labels</th>
        </tr>
      </thead>
      <tbody>
        {visibleIssues.map((issue) => (
          <IssuesTableRow key={issue.id} issue={issue} />
        ))}
      </tbody>
    </Table>
  )
}

export default IssuesTable
