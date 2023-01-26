import { ActionIcon, Menu } from '@mantine/core'
import { useState } from 'react'

import { MdDelete, MdMoreHoriz } from 'react-icons/md'
import { useDeleteExpenseMutation } from '../../../../../hooks/react-query/monerate/expense/useDeleteExpenseMutation'
import { MyExpenseInput } from '../../../../../types/domains/monerate/expense/MyExpenseInput'

type Props = {
  input: MyExpenseInput
  afterDelete: () => void
}

export const ExpenseMoreMenu = (props: Props) => {
  const { mutate: submitDelete } = useDeleteExpenseMutation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu shadow="md" width={200} position="bottom-end" opened={isOpen}>
      <Menu.Target>
        <ActionIcon onClick={() => setIsOpen(true)}>
          <MdMoreHoriz />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          color="red"
          onClick={() => {
            if (confirm('Are you sure you want to delete this expense?')) {
              submitDelete(props.input.id!, {
                onSuccess: () => {
                  props.afterDelete()
                  setIsOpen(false)
                },
              })
            }
          }}
          icon={<MdDelete />}
        >
          Delete Expense
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
