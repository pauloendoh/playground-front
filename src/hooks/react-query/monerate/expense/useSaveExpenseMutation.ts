import { useMutation, useQueryClient } from '@tanstack/react-query'
import { plainToClass } from 'class-transformer'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { MyExpenseInput } from '../../../../types/domains/monerate/expense/MyExpenseInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'
import { IExpenseFilter } from '../../../zustand/useExpenseFilterStore'

gql`
  mutation SaveExpenseV2($data: ExpenseInput!) {
    saveExpenseMutation(data: $data) {
      ...Expense
    }
  }
`

export const useSaveExpenseMutation = (filter?: IExpenseFilter) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyExpenseInput) => {
      const clearData = plainToClass(MyExpenseInput, data, {
        strategy: 'excludeAll',
      })
      return sdk
        .SaveExpenseV2({
          data: {
            ...clearData,
            categoryIds: [],
          },
        })
        .then((res) => res.saveExpenseMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('Expense saved!')

        queryClient.invalidateQueries(queryKeys.expenses(filter))
      },
    }
  )
}
