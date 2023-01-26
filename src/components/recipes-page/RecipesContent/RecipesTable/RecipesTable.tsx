import {
  Button,
  createStyles,
  Flex,
  Paper,
  Rating,
  ScrollArea,
  Table,
} from '@mantine/core'
import { useForceUpdate, useListState, useToggle } from '@mantine/hooks'
import { useEffect, useMemo } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { TbGripVertical } from 'react-icons/tb'
import { useRecipesQuery } from '../../../../hooks/react-query/recipe/useRecipesQuery'
import useRecipeModalStore from '../../../../hooks/zustand/modals/useRecipeModalStore'
import { MyRecipeInput } from '../../../../types/domains/recipe/MyRecipeInput'

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

type Props = {}

export default function RecipesTable(props: Props) {
  const { classes } = useStyles()

  const { data } = useRecipesQuery()
  const forceUpdate = useForceUpdate()
  const [onlySaved, toggleOnlySaved] = useToggle([false, true])

  const showData = useMemo(() => {
    return data || []
  }, [data])

  useEffect(() => {
    handlers.setState(showData)
  }, [showData])

  const [state, handlers] = useListState(showData)

  const { openModal } = useRecipeModalStore()
  const onClickRecipeRow = (recipe: MyRecipeInput) => {
    openModal(recipe)
  }

  const items = state.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided) => (
        <tr
          className={classes.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          onClick={() => onClickRecipeRow(item)}
        >
          <td>
            <div
              style={{
                display: onlySaved ? undefined : 'none',
              }}
              className={classes.dragHandle}
              {...provided.dragHandleProps}
            >
              <TbGripVertical size={18} />
            </div>
          </td>
          <td>{item.title}</td>
          <td>
            <Rating value={item.rating || undefined} readOnly />
          </td>
          <td>{item.description}</td>
        </tr>
      )}
    </Draggable>
  ))

  return (
    <Paper>
      <ScrollArea>
        <DragDropContext
          onDragEnd={({ destination, source }) =>
            handlers.reorder({
              from: source.index,
              to: destination?.index || 0,
            })
          }
        >
          <Table
            sx={(theme) => ({
              minWidth: 420,
              '& tbody tr td': { borderBottom: 0 },
              // on hover
              '& tbody tr:hover td': {
                backgroundColor: theme.colors.gray[2],
                cursor: 'pointer',
              },
            })}
          >
            <thead>
              <tr>
                <th style={{ width: 40 }} />
                <th style={{ width: 120 }}>Recipe</th>
                <th style={{ width: 120 }}>Rating</th>
                <th style={{ width: 240 }}>Description</th>
              </tr>
            </thead>
            <Droppable droppableId="dnd-list" direction="vertical">
              {(provided) => (
                <tbody {...provided.droppableProps} ref={provided.innerRef}>
                  {items}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
          </Table>
        </DragDropContext>
      </ScrollArea>

      <Flex p={16}>
        <Button onClick={() => openModal(new MyRecipeInput())}>
          + Create Recipe
        </Button>
      </Flex>
    </Paper>
  )
}
