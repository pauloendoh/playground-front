import { useMutation, useQueryClient } from '@tanstack/react-query'
import { plainToClass } from 'class-transformer'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { IssueLabelFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'
import MyIssueLabelInput from './types/MyIssueLabelInput'

gql`
  mutation SaveIssueLabelMutation($data: IssueLabelInput!) {
    saveIssueLabelMutation(data: $data) {
      ...IssueLabel
    }
  }
`

export const useSaveIssueLabelMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyIssueLabelInput) => {
      const clearData = plainToClass(MyIssueLabelInput, data, {
        strategy: 'excludeAll',
      })
      return sdk
        .SaveIssueLabelMutation({
          data: clearData,
        })
        .then((res) => res.saveIssueLabelMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('IssueLabel saved!')

        if (!saved) return
        queryClient.setQueryData<IssueLabelFragment[]>(
          queryKeys.issueLabels,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
