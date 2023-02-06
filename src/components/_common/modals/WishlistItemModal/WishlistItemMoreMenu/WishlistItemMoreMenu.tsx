import { ActionIcon, Menu } from '@mantine/core'

import { MdDelete, MdMoreHoriz } from 'react-icons/md'
import { useDeleteWishlistMutation } from '../../../../../hooks/react-query/monerate/wishlist-item/useDeleteWishlistMutation'
import { MyWishlistItemValidInput } from '../../../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'

type Props = {
  item: MyWishlistItemValidInput
  afterDelete: () => void
}

export const WishlistItemMoreMenu = (props: Props) => {
  const { mutate: submitDelete } = useDeleteWishlistMutation()

  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <ActionIcon>
          <MdMoreHoriz />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          color="red"
          onClick={() => {
            if (
              confirm('Are you sure you want to delete this wishlist item?')
            ) {
              submitDelete(props.item.id!, {
                onSuccess: () => {
                  props.afterDelete()
                },
              })
            }
          }}
          icon={<MdDelete />}
        >
          Delete item
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
