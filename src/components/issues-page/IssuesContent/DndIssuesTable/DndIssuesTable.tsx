import { createStyles, ScrollArea, Table } from '@mantine/core'
import { IconGripVertical } from '@tabler/icons-react'
import { useMemo } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import useIssueFilterStore from '../../../../hooks/zustand/useIssueFilterStore'
import IssuesTableRow from './IssuesTableRow/IssuesTableRow'

interface Props {
  issues: IssueFragment[]
}

export function DndIssuesTable(props: Props) {
  const { classes } = useStyles()

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

  const items = visibleIssues.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided) => (
        <tr
          className={classes.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <td>
            <div className={classes.dragHandle} {...provided.dragHandleProps}>
              <IconGripVertical size={18} stroke={1.5} />
            </div>
          </td>
          <td style={{ width: 80 }}>{item.position}</td>
          <td style={{ width: 120 }}>{item.title}</td>
          <td style={{ width: 80 }}>{item.solution}</td>
          <td>Labels</td>
        </tr>
      )}
    </Draggable>
  ))

  return (
    <ScrollArea>
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          console.log({
            destination,
            source,
          })
          // handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }}
      >
        <Table
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
              <th style={{ width: 40 }} />
              <th style={{ width: 80 }}>Position</th>
              <th style={{ width: 240 }}>Issue</th>
              <th style={{ width: 240 }}>Solution</th>
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

const useStyles = createStyles((theme) => ({
  item: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
  },
}))
