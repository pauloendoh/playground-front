import { useMutation, useQueryClient } from '@tanstack/react-query'
import gql from 'graphql-tag'
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
        queryClient.invalidateQueries(queryKeys.issues)

        myNotifications.success('Issue deleted!')
      },
    }
  )
}
