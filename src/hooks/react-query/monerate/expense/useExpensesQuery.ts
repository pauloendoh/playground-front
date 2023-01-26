import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query ExpensesQuery {
    expensesQuery {
      ...Expense
    }
  }
`

export const useExpensesQuery = () => {
  return useQuery({
    queryKey: queryKeys.expenses,
    queryFn: () => sdk.ExpensesQuery().then((res) => res.expensesQuery),
  })
}
