import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { NhAuthorFragment } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import { myNotifications } from '../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  mutation ToggleNhAuthorMutation($data: String!) {
    toggleNhAuthorMutation(authorUrl: $data) {
      ...NhAuthor
    }
  }
`

export const useToggleAuthorCheckMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (authorUrl: string) => {
      return sdk
        .ToggleNhAuthorMutation({
          data: authorUrl,
        })
        .then((res) => res.toggleNhAuthorMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('NhAuthor saved!')
        if (!saved) return
        queryClient.setQueryData<NhAuthorFragment[]>(
          queryKeys.nhAuthors,
          (curr) =>
            upsert(curr, saved, (currItem) => currItem.url === saved.url)
        )
      },
    }
  )
}
