import { useMutation } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { RegisterValidInput } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import useAuthStore from '../../zustand/useAuthUserStore'

gql`
  mutation RegisterMutation($data: RegisterValidInput!) {
    registerMutation(data: $data) {
      ...AuthUser
    }
  }
`

export const useRegisterMutation = () => {
  const { setAuthUser } = useAuthStore()
  return useMutation(
    (data: RegisterValidInput) =>
      sdk
        .RegisterMutation({
          data: data,
        })
        .then((res) => res.registerMutation),
    {
      onSuccess: (data) => {
        if (!data) return
        setAuthUser(data)
      },
    }
  )
}
