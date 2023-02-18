import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyIssueValidInput } from '../../../../types/domains/monerate/issue/MyIssueValidInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveIssueMutation($data: IssueValidInput!) {
    saveIssueMutation(data: $data) {
      ...Issue
    }
  }
`

export const useSaveIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (data: MyIssueValidInput) =>
      sdk
        .SaveIssueMutation({
          data: {
            ...data,
          },
        })
        .then((res) => res.saveIssueMutation),
    {
      onSuccess: (saved) => {
        myNotifications.success('Issue saved!')
        if (!saved) return
        queryClient.setQueryData<IssueFragment[]>(queryKeys.issues, (curr) =>
          upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
