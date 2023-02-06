import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { WishlistItemFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteWishlistMutation($deleteWishlistMutationId: String!) {
    deleteWishlistMutation(id: $deleteWishlistMutationId)
  }
`

export const useDeleteWishlistMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteWishlistMutation({
          deleteWishlistMutationId: id,
        })
        .then((res) => res.deleteWishlistMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<WishlistItemFragment[]>(
          queryKeys.wishlistItems,
          (curr) => deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Item deleted!')
      },
    }
  )
}
