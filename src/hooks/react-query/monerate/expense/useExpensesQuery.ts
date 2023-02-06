import { useInfiniteQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'
import { IExpenseFilter } from '../../../zustand/useExpenseFilterStore'

gql`
  query ExpensesQuery(
    $pagination: PaginationInput
    $filter: ExpenseFilterInput
  ) {
    expensesQuery(pagination: $pagination, filter: $filter) {
      ...Expense
    }
  }
`

const PAGE_SIZE = 10

export const useExpensesQuery = (filter?: IExpenseFilter) => {
  return useInfiniteQuery(
    queryKeys.expenses(filter),
    ({ pageParam = 1 }) =>
      sdk
        .ExpensesQuery({
          pagination: { page: pageParam, pageSize: PAGE_SIZE },
          filter: filter || null,
        })
        .then((res) => res.expensesQuery),
    {
      getNextPageParam: (lastPageData, pages) => {
        if (lastPageData.length < PAGE_SIZE) {
          return undefined
        }

        return pages.length + 1
      },
    }
  )
}
