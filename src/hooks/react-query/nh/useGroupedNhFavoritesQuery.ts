import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../graphql/sdk'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  query GroupedNhFavoritesQuery {
    groupedNhFavoritesQuery {
      ...AuthorCount
    }
  }
`

export const useGroupedNhFavoritesQuery = () => {
  return useQuery({
    queryKey: queryKeys.nhAuthorCount,
    queryFn: () =>
      sdk.GroupedNhFavoritesQuery().then((res) => res.groupedNhFavoritesQuery),
  })
}
