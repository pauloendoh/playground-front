import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { ExpenseFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyExpenseInput } from '../../../../types/domains/monerate/expense/MyExpenseInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveExpenseMutation($data: ExpenseInput!) {
    saveExpenseMutation(data: $data) {
      ...Expense
    }
  }
`

export const useSaveExpenseMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (data: MyExpenseInput) =>
      sdk
        .SaveExpenseMutation({
          data: {
            ...data,
            value: data.value,
          },
        })
        .then((res) => res.saveExpenseMutation),
    {
      onSuccess: (saved) => {
        queryClient.setQueryData<ExpenseFragment[]>(
          queryKeys.expenses,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
        myNotifications.success('Expense saved!')
      },
    }
  )
}
