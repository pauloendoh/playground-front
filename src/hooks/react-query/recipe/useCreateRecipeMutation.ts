import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { RecipeFragment } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import { MyRecipeValidInput } from '../../../types/domains/recipe/MyRecipeValidInput'
import { myNotifications } from '../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  mutation SaveRecipeMutation($data: RecipeValidInput!) {
    saveRecipeMutation(data: $data) {
      ...Recipe
    }
  }
`

export const useCreateRecipeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyRecipeValidInput) => {
      return sdk
        .SaveRecipeMutation({
          data,
        })
        .then((res) => res.saveRecipeMutation)
    },
    {
      onSuccess: (saved) => {
        queryClient.setQueryData<RecipeFragment[]>(queryKeys.recipes, (curr) =>
          upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
        myNotifications.success('Recipe saved!')
      },
    }
  )
}
