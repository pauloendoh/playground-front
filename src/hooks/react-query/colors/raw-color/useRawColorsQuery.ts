import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query RawColorsQuery {
    rawColorsQuery {
      ...RawColor
    }
  }
`

export const useRawColorsQuery = () => {
  return useQuery({
    queryKey: queryKeys.issues,
    queryFn: () => sdk.RawColorsQuery().then((res) => res.rawColorsQuery),
  })
}
