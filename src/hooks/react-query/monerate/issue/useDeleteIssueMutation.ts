import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteIssueMutation($issueId: String!) {
    deleteIssueMutation(issueId: $issueId)
  }
`

export const useDeleteIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteIssueMutation({
          issueId: id,
        })
        .then((res) => res.deleteIssueMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<IssueFragment[]>(queryKeys.issues, (curr) =>
          deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Issue deleted!')
      },
    }
  )
}
