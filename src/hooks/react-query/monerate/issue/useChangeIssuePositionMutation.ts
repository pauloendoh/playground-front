import { useMutation, useQueryClient } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { mutationKeys } from '../../../../utils/mutationKeys'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation ChangeIssuePositionMutation($data: ChangeIssuePositionInput!) {
    changeIssuePositionMutation(data: $data)
  }
`

export const useChangeIssuePositionMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: {
      issueId: string
      fromPosition: number
      toPosition: number
    }) => {
      return sdk
        .ChangeIssuePositionMutation({
          data,
        })
        .then((res) => res.changeIssuePositionMutation)
    },
    {
      onSuccess: (ok) => {
        myNotifications.success('Issue saved!')
        queryClient.invalidateQueries(queryKeys.issues)
      },
      mutationKey: mutationKeys.changeIssuePosition,
    }
  )
}
