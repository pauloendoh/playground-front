import { useMutation, useQueryClient } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { SalaryFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MySalaryValidInput } from '../../../../types/domains/monerate/salary/MySalaryValidInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveSalaryMutation($data: SalaryValidInput!) {
    saveSalaryMutation(data: $data) {
      ...Salary
    }
  }
`

export const useSaveSalaryMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (data: MySalaryValidInput) =>
      sdk
        .SaveSalaryMutation({
          data: {
            ...data,
            value: data.value,
          },
        })
        .then((res) => res.saveSalaryMutation),
    {
      onSuccess: (saved) => {
        myNotifications.success('Salary saved!')

        if (!saved) return
        queryClient.setQueryData<SalaryFragment>(queryKeys.salary, saved)
      },
    }
  )
}
