import { useMutation, useQueryClient } from '@tanstack/react-query'
import { plainToClass } from 'class-transformer'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { CategoryFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'
import { MyCategoryInput } from './types/MyCategoryInput'

gql`
  mutation SaveCategoryMutation($data: CategoryInput) {
    saveCategoryMutation(data: $data) {
      ...Category
    }
  }
`

export const useSaveCategoryMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyCategoryInput) => {
      const clearData = plainToClass(MyCategoryInput, data, {
        strategy: 'excludeAll',
      })
      return sdk
        .SaveCategoryMutation({
          data: clearData,
        })
        .then((res) => res.saveCategoryMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('Category saved!')

        if (!saved) return
        queryClient.setQueryData<CategoryFragment[]>(
          queryKeys.categories,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
