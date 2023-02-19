import { Table } from '@mantine/core'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import IssuesTableRow from './IssuesTableRow/IssuesTableRow'

type Props = {
  issues: IssueFragment[]
}

const IssuesTable = (props: Props) => {
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
        {props.issues?.map((issue) => (
          <IssuesTableRow key={issue.id} issue={issue} />
        ))}
      </tbody>
    </Table>
  )
}

export default IssuesTable
