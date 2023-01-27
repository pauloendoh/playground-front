import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { CurrentSavingFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyCurrentSavingValidInput } from '../../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveCurrentSavingMutation($data: CurrentSavingValidInput!) {
    saveCurrentSavingMutation(data: $data) {
      ...CurrentSaving
    }
  }
`

export const useSaveCurrentSavingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (data: MyCurrentSavingValidInput) =>
      sdk
        .SaveCurrentSavingMutation({
          data: {
            ...data,
            value: data.value,
          },
        })
        .then((res) => res.saveCurrentSavingMutation),
    {
      onSuccess: (saved) => {
        myNotifications.success('Current saving saved!')
        if (!saved) return
        queryClient.setQueryData<CurrentSavingFragment[]>(
          queryKeys.currentSavings,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
