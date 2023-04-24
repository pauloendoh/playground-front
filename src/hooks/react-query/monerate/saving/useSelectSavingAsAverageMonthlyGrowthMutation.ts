import { useMutation, useQueryClient } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SelectSavingAsAverageMonthlyGrowthMutation($savingId: String!) {
    selectSavingAsAverageMonthlyGrowthMutation(savingId: $savingId) {
      ...CurrentSaving
    }
  }
`

export const useSelectSavingAsAverageMonthlyGrowthMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (savingId: string) =>
      sdk
        .SelectSavingAsAverageMonthlyGrowthMutation({
          savingId,
        })
        .then((res) => res.selectSavingAsAverageMonthlyGrowthMutation),
    {
      onSuccess: async (saved) => {
        myNotifications.success('Saved!')

        await queryClient.invalidateQueries(queryKeys.currentSavings)
      },
    }
  )
}
