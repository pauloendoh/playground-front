import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { MixedColorFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteMixedColorMutation($mixedColorId: String!) {
    deleteMixedColorMutation(id: $mixedColorId)
  }
`

export const useDeleteMixedColorMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteMixedColorMutation({
          mixedColorId: id,
        })
        .then((res) => res.deleteMixedColorMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<MixedColorFragment[]>(
          queryKeys.mixedColors,
          (curr) => deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Mix deleted!')
      },
    }
  )
}
