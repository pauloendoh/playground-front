import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { MixedColorFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyMixedColorInput } from '../../../../types/domains/colors/mixed-color/MyMixedColorInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveMixedColorMutation($data: MixedColorInput!) {
    saveMixedColorMutation(data: $data) {
      ...MixedColor
    }
  }
`

export const useSaveMixedColorMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyMixedColorInput) => {
      const clearData = data
      // plainToClass(MyMixedColorInput, data, {
      //   strategy: 'excludeAll',
      // })
      return sdk
        .SaveMixedColorMutation({
          data: {
            ...clearData,
          },
        })
        .then((res) => res.saveMixedColorMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('MixedColor saved!')
        if (!saved) return
        queryClient.setQueryData<MixedColorFragment[]>(
          queryKeys.mixedColors,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
