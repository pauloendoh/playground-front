import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { CategoryFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation DeleteCategoryMutation($deleteCategoryMutationId: String) {
    deleteCategoryMutation(id: $deleteCategoryMutationId)
  }
`

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (id: string) =>
      sdk
        .DeleteCategoryMutation({
          deleteCategoryMutationId: id,
        })
        .then((res) => res.deleteCategoryMutation),
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData<CategoryFragment[]>(
          queryKeys.categories,
          (curr) => deleteFromArray(curr, (currItem) => currItem.id === id)
        )
        myNotifications.success('Category deleted!')
      },
    }
  )
}
