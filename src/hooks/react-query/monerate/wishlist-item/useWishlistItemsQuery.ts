import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query WishlistItemsQuery {
    wishlistItemsQuery {
      ...WishlistItem
    }
  }
`

export const useWishlistItemsQuery = () => {
  return useQuery({
    queryKey: queryKeys.wishlistItems,
    queryFn: () =>
      sdk.WishlistItemsQuery().then((res) => res.wishlistItemsQuery),
  })
}
