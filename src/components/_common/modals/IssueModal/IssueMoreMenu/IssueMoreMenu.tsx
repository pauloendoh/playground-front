import { ActionIcon, Menu } from '@mantine/core'
import { useState } from 'react'

import { MdDelete, MdMoreHoriz } from 'react-icons/md'
import { useDeleteIssueMutation } from '../../../../../hooks/react-query/monerate/issue/useDeleteIssueMutation'
import { MyIssueInput } from '../../../../../types/domains/monerate/issue/MyIssueValidInput'

type Props = {
  input: MyIssueInput
  afterDelete: () => void
}

export const IssueMoreMenu = (props: Props) => {
  const { mutate: submitDelete } = useDeleteIssueMutation()
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
            if (confirm('Are you sure you want to delete this issue?')) {
              submitDelete(props.input.id!, {
                onSuccess: () => {
                  console.log({
                    deleted: 'true',
                  })
                  props.afterDelete()
                  setIsOpen(false)
                },
              })
            }
          }}
          icon={<MdDelete />}
        >
          Delete Issue
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
