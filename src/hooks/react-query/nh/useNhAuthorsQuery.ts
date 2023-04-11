import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../graphql/sdk'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  query NhAuthorsQuery {
    nhAuthorsQuery {
      ...NhAuthor
    }
  }
`

export const useUseNhAuthorsQuery = () => {
  return useQuery({
    queryKey: queryKeys.nhAuthors,
    queryFn: () => sdk.NhAuthorsQuery().then((res) => res.nhAuthorsQuery),
  })
}
