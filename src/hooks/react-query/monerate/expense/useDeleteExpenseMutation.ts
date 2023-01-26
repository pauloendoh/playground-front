import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { ExpenseFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteExpenseMutation($deleteExpenseMutationId: String!) {
    deleteExpenseMutation(id: $deleteExpenseMutationId)
  }
`

export const useDeleteExpenseMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteExpenseMutation({
          deleteExpenseMutationId: id,
        })
        .then((res) => res.deleteExpenseMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<ExpenseFragment[]>(
          queryKeys.expenses,
          (curr) => deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Expense deleted!')
      },
    }
  )
}
