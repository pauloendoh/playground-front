import { Table } from '@mantine/core'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import useIssueModalStore from '../../../../hooks/zustand/modals/useIssueModalStore'

type Props = {
  issues: IssueFragment[]
}

const IssuesTable = (props: Props) => {
  const { openModal } = useIssueModalStore()
  return (
    <Table highlightOnHover>
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
          <tr
            key={issue.id}
            onClick={() => {
              openModal({
                ...issue,
                labelIds: issue.labels?.map((label) => label.id) || [],
              })
            }}
          >
            <td>{issue.position}</td>
            <td>{issue.title}</td>
            <td>{issue.isSolved ? 'Yes' : 'No'}</td>
            <td>{issue.solution}</td>
            <td></td>
            {/* <td>{isue.labels?.map((label) => label.name).join(', ')}</td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default IssuesTable
