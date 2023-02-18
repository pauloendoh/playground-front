import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { IssueLabelFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteIssueLabelMutation($deleteIssueLabelMutationId: String!) {
    deleteIssueLabelMutation(id: $deleteIssueLabelMutationId)
  }
`

export const useDeleteIssueLabelMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteIssueLabelMutation({
          deleteIssueLabelMutationId: id,
        })
        .then((res) => res.deleteIssueLabelMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<IssueLabelFragment[]>(
          queryKeys.issueLabels,
          (curr) => deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Label deleted!')
      },
    }
  )
}
