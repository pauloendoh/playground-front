import { LoadingOverlay, ScrollArea, Table } from '@mantine/core'
import { useIsMutating } from '@tanstack/react-query'
import { useMemo } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import useIssueFilterStore from '../../../../hooks/zustand/useIssueFilterStore'
import { mutationKeys } from '../../../../utils/mutationKeys'
import IssuesTableRow from './IssuesTableRow/IssuesTableRow'
import { useDragEndIssue } from './useDragEndIssue/useDragEndIssue'

interface Props {
  issues: IssueFragment[]
}

export function DndIssuesTable(props: Props) {
  const { filterByIsSolved, filterIssueLabelIds } = useIssueFilterStore()

  const visibleIssues = useMemo(() => {
    return props.issues
      .filter((issue) => {
        const containsAllLabels = filterIssueLabelIds.every((labelId) =>
          issue.labels.some((label) => label.id === labelId)
        )

        return issue.isSolved === filterByIsSolved && containsAllLabels
      })
      .sort(
        (a, b) =>
          // position
          a.position - b.position
      )
  }, [props.issues, filterByIsSolved, filterIssueLabelIds])

  const onDragEnd = useDragEndIssue(visibleIssues)

  const isChangingPosition = useIsMutating(mutationKeys.changeIssuePosition)

  return (
    <ScrollArea>
      <LoadingOverlay visible={!!isChangingPosition} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Table
          sx={(theme) => ({
            'tbody > tr': {
              ':hover td': {
                backgroundColor: theme.colors.dark[4],
              },
            },
            td: {
              whiteSpace: 'pre-line',
            },
          })}
        >
          <thead>
            <tr>
              <th style={{ width: 40 }} />
              <th style={{ width: 40 }}>#</th>
              <th style={{ width: 280 }}>Issue</th>
              <th style={{ width: 280 }}>Solution</th>
              <th>Labels</th>
            </tr>
          </thead>
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {/* {items} */}
                {visibleIssues.map((item, index) => (
                  <IssuesTableRow key={item.id} issue={item} index={index} />
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </ScrollArea>
  )
}
