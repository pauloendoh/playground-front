import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../graphql/sdk'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  query GetRecipesQuery {
    getRecipesQuery {
      ...Recipe
    }
  }
`

export const useRecipesQuery = () => {
  return useQuery({
    queryKey: queryKeys.recipes,
    queryFn: () => sdk.GetRecipesQuery().then((res) => res.getRecipesQuery),
  })
}
