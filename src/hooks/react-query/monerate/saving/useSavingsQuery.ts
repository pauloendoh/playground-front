import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query SavingsQuery {
    savingsQuery {
      ...CurrentSaving
    }
  }
`

export const useSavingsQuery = () => {
  return useQuery({
    queryKey: queryKeys.currentSavings,
    queryFn: () => sdk.SavingsQuery().then((res) => res.savingsQuery),
  })
}
