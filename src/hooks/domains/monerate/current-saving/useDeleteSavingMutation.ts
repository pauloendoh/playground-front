import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { CurrentSavingFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteSavingMutation($savingId: String!) {
    deleteSavingMutation(savingId: $savingId)
  }
`

export const useDeleteSavingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteSavingMutation({
          savingId: id,
        })
        .then((res) => res.deleteSavingMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<CurrentSavingFragment[]>(
          queryKeys.currentSavings,
          (curr) => deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Saving deleted!')
      },
    }
  )
}
