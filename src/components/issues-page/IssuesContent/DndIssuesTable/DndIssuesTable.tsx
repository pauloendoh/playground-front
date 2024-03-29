import { LoadingOverlay, ScrollArea, Table } from '@mantine/core'
import { useIsMutating } from '@tanstack/react-query'
import { useMemo } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import { useMyMediaQuery } from '../../../../hooks/useMyMediaQuery'
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

        if (filterByIsSolved) {
          return !!issue.solvedAt && containsAllLabels
        }

        return issue.solvedAt === null && containsAllLabels
      })
      .sort((a, b) => {
        const avgA = a.frequency * a.intensity
        const avgB = b.frequency * b.intensity

        // highest avg first
        return avgB - avgA
      })
  }, [props.issues, filterByIsSolved, filterIssueLabelIds])

  const onDragEnd = useDragEndIssue(visibleIssues)

  const isChangingPosition = useIsMutating(mutationKeys.changeIssuePosition)

  const { isMobile } = useMyMediaQuery()
  return (
    <ScrollArea.Autosize mah="calc(100vh - 300px)">
      <LoadingOverlay visible={!!isChangingPosition} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Table
          sx={(theme) => ({
            tableLayout: 'fixed',
            'tbody > tr': {
              ':hover td': {
                backgroundColor: theme.colors.dark[4],
              },
            },
            td: {
              whiteSpace: 'pre-line',
              verticalAlign: 'top',
            },
          })}
        >
          <thead>
            <tr>
              <th style={{ width: 40 }}>#</th>

              <th style={{ width: '50%' }}>
                {isMobile ? 'Issue' : 'Main issue + motives'}
              </th>
              <th
                style={{
                  width: '50%',
                }}
              >
                {isMobile ? 'Solution' : 'Solution (impactful interests)'}
              </th>
              {!isMobile && <th style={{ width: 200 }}>Labels</th>}
              <th />
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
    </ScrollArea.Autosize>
  )
}
