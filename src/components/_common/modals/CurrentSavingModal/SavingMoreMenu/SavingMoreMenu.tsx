import { ActionIcon, Menu } from '@mantine/core'
import { useState } from 'react'

import { MdDelete, MdMoreHoriz } from 'react-icons/md'
import { useDeleteSavingMutation } from '../../../../../hooks/domains/monerate/current-saving/useDeleteSavingMutation'
import { MyCurrentSavingValidInput } from '../../../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'

type Props = {
  saving: MyCurrentSavingValidInput
  afterDelete: () => void
}

export const SavingMoreMenu = (props: Props) => {
  const { mutate: submitDelete } = useDeleteSavingMutation()
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
            if (confirm('Are you sure you want to delete this saving?')) {
              submitDelete(props.saving.id!, {
                onSuccess: () => {
                  props.afterDelete()
                  setIsOpen(false)
                },
              })
            }
          }}
          icon={<MdDelete />}
        >
          Delete saving
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
