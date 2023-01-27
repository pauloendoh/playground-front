import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query CategoriesQuery {
    categoriesQuery {
      ...Category
    }
  }
`

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: queryKeys.categories,
    queryFn: () => sdk.CategoriesQuery().then((res) => res.categoriesQuery),
  })
}
