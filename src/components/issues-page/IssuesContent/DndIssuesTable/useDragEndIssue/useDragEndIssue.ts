import { DropResult } from 'react-beautiful-dnd'
import { IssueFragment } from '../../../../../graphql/generated/graphql'
import { useChangeIssuePositionMutation } from '../../../../../hooks/react-query/monerate/issue/useChangeIssuePositionMutation'

export const useDragEndIssue = (visibleIssues: IssueFragment[]) => {
  const { mutate } = useChangeIssuePositionMutation()
  return (result: DropResult) => {
    const { destination, source } = result

    if (!destination || !source) {
      return
    }

    if (destination.index === source.index) {
      return
    }

    const sourceIssue = visibleIssues[source.index]
    const destinationIssue = visibleIssues[destination.index]

    console.log({
      issueId: sourceIssue.id,
      fromPosition: sourceIssue.position,
      toPosition: destinationIssue.position,
    })

    mutate({
      issueId: sourceIssue.id,
      fromPosition: sourceIssue.position,
      toPosition: destinationIssue.position,
    })
  }
}
