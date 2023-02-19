import { useMutation, useQueryClient } from '@tanstack/react-query'
import { plainToClass } from 'class-transformer'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { IssueFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyIssueInput } from '../../../../types/domains/monerate/issue/MyIssueInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveIssueMutation($data: IssueInput!) {
    saveIssueMutation(data: $data) {
      ...Issue
    }
  }
`

export const useSaveIssueMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyIssueInput) => {
      const clearData = plainToClass(MyIssueInput, data, {
        strategy: 'excludeAll',
      })
      return sdk
        .SaveIssueMutation({
          data: {
            ...clearData,
          },
        })
        .then((res) => res.saveIssueMutation)
    },
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
