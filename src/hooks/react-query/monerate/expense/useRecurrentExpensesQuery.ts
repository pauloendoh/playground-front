import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query RecurrentExpensesQuery {
    recurrentExpensesQuery {
      ...Expense
    }
  }
`

export const useRecurrentExpensesQuery = () => {
  return useQuery({
    queryKey: queryKeys.recurrentExpenses,
    queryFn: () =>
      sdk.RecurrentExpensesQuery().then((res) => res.recurrentExpensesQuery),
  })
}

export type RecurrentExpensesItemOutput = NonNullable<
  ReturnType<typeof useRecurrentExpensesQuery>['data']
>[0]
