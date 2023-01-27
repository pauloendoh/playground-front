import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { RecipeFragment } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import { MyRecipeInput } from '../../../types/domains/recipe/MyRecipeInput'
import { myNotifications } from '../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  mutation SaveRecipeMutation($data: RecipeInput!) {
    saveRecipeMutation(data: $data) {
      ...Recipe
    }
  }
`

export const useCreateRecipeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyRecipeInput) => {
      return sdk
        .SaveRecipeMutation({
          data,
        })
        .then((res) => res.saveRecipeMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('Recipe saved!')
        if (!saved) return

        queryClient.setQueryData<RecipeFragment[]>(queryKeys.recipes, (curr) =>
          upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
