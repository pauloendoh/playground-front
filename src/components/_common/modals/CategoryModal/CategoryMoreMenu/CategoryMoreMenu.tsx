import { ActionIcon, Menu } from '@mantine/core'
import { useState } from 'react'

import { MdDelete, MdMoreHoriz } from 'react-icons/md'
import MyCategoryInput from '../../../../../hooks/react-query/monerate/category/types/MyCategoryInput'
import { useDeleteCategoryMutation } from '../../../../../hooks/react-query/monerate/category/useDeleteCategoryMutation'

type Props = {
  input: MyCategoryInput
  afterDelete: () => void
}

export const CategoryMoreMenu = (props: Props) => {
  const { mutate: submitDelete } = useDeleteCategoryMutation()
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
            if (confirm('Are you sure you want to delete this category?')) {
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
          Delete Category
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
