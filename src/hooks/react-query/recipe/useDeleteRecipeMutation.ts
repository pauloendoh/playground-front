import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFromArray } from 'endoh-utils'
import gql from 'graphql-tag'
import { RecipeFragment } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import { myNotifications } from '../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../utils/queryKeys'

gql`
  mutation DeleteRecipeMutation($recipeId: String!) {
    deleteRecipeMutation(recipeId: $recipeId)
  }
`

export const useDeleteRecipeMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (recipeId: string) =>
      sdk
        .DeleteRecipeMutation({
          recipeId,
        })
        .then((res) => res.deleteRecipeMutation),
    {
      onSuccess: (_, recipeId) => {
        queryClient.setQueryData<RecipeFragment[]>(queryKeys.recipes, (curr) =>
          deleteFromArray(curr, (recipe) => recipe.id === recipeId)
        )
        myNotifications.success('Recipe deleted!')
      },
    }
  )
}
