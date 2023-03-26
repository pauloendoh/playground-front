import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query MixedColorsQuery {
    mixedColorsQuery {
      ...MixedColor
    }
  }
`

export const useMixedColorsQuery = () => {
  return useQuery({
    queryKey: queryKeys.mixedColors,
    queryFn: () => sdk.MixedColorsQuery().then((res) => res.mixedColorsQuery),
  })
}
