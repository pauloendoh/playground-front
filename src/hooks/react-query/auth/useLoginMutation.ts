import { useMutation } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { LoginValidInput } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import useAuthStore from '../../zustand/useAuthUserStore'

gql`
  mutation LoginMutation($data: LoginValidInput!) {
    loginMutation(data: $data) {
      id
      username
      email
      token
      expiresAt
    }
  }
`

export const useLoginMutation = () => {
  const { setAuthUser } = useAuthStore()
  return useMutation(
    (data: LoginValidInput) =>
      sdk
        .LoginMutation({
          data: data,
        })
        .then((res) => res.loginMutation),
    {
      onSuccess: (data) => {
        setAuthUser(data)
      },
    }
  )
}
