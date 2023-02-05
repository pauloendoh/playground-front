import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { CurrentSavingFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MySavingValidInput } from '../../../../types/domains/monerate/saving/MySavingValidInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveSavingMutation($data: SavingValidInput!) {
    saveSavingMutation(data: $data) {
      ...CurrentSaving
    }
  }
`

export const useSaveSavingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (data: MySavingValidInput) =>
      sdk
        .SaveSavingMutation({
          data: {
            ...data,
            value: data.value,
          },
        })
        .then((res) => res.saveSavingMutation),
    {
      onSuccess: (saved) => {
        myNotifications.success('saving saved!')
        if (!saved) return
        queryClient.setQueryData<CurrentSavingFragment[]>(
          queryKeys.currentSavings,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
