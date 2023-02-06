import { useMutation, useQueryClient } from '@tanstack/react-query'
import gql from 'graphql-tag'
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
        queryClient.invalidateQueries(queryKeys.expenses())

        myNotifications.success('Expense deleted!')
      },
    }
  )
}
