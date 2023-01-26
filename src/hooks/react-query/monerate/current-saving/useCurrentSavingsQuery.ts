import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query CurrentSavingsQuery {
    currentSavingsQuery {
      ...CurrentSaving
    }
  }
`

export const useCurrentSavingsQuery = () => {
  return useQuery({
    queryKey: queryKeys.currentSavings,
    queryFn: () =>
      sdk.CurrentSavingsQuery().then((res) => res.currentSavingsQuery),
  })
}
