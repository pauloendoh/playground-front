import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query ExpensesQuery($pagination: PaginationInput) {
    expensesQuery(pagination: $pagination) {
      ...Expense
    }
  }
`

const PAGE_SIZE = 5

export const useExpensesQuery = () => {
  const queryClient = useQueryClient()
  return useInfiniteQuery(
    queryKeys.expenses,
    ({ pageParam = 1 }) =>
      sdk
        .ExpensesQuery({ pagination: { page: pageParam, pageSize: PAGE_SIZE } })
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
