import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { WishlistItemFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyWishlistItemValidInput } from '../../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveWishlistItemMutation($data: WishlistItemValidInput!) {
    saveWishlistItemMutation(data: $data) {
      ...WishlistItem
    }
  }
`

export const useSaveWishlistItemMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (data: MyWishlistItemValidInput) =>
      sdk
        .SaveWishlistItemMutation({
          data: {
            ...data,
          },
        })
        .then((res) => res.saveWishlistItemMutation),
    {
      onSuccess: (saved) => {
        myNotifications.success('Item saved!')
        if (!saved) return

        queryClient.setQueryData<WishlistItemFragment[]>(
          queryKeys.wishlistItems,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
