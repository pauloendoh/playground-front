import { useMutation, useQueryClient } from '@tanstack/react-query'
import { upsert } from 'endoh-utils'
import gql from 'graphql-tag'
import { RawColorFragment } from '../../../../graphql/generated/graphql'
import { sdk } from '../../../../graphql/sdk'
import { MyRawColorInput } from '../../../../types/domains/colors/raw-color/MyRawColorInput'
import { myNotifications } from '../../../../utils/mantine/myNotifications'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  mutation SaveRawColorMutation($data: RawColorInput!) {
    saveRawColorMutation(data: $data) {
      ...RawColor
    }
  }
`

export const useSaveRawColorMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: MyRawColorInput) => {
      const clearData = data
      // plainToClass(MyRawColorInput, data, {
      //   strategy: 'excludeAll',
      // })
      return sdk
        .SaveRawColorMutation({
          data: {
            ...clearData,
          },
        })
        .then((res) => res.saveRawColorMutation)
    },
    {
      onSuccess: (saved) => {
        myNotifications.success('RawColor saved!')
        if (!saved) return
        queryClient.setQueryData<RawColorFragment[]>(
          queryKeys.rawColors,
          (curr) => upsert(curr, saved, (currItem) => currItem.id === saved.id)
        )
      },
    }
  )
}
