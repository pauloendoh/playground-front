import gql from 'graphql-tag'
import { useState } from 'react'
import { AuthUserFragment } from '../../../graphql/generated/graphql'
import { sdk } from '../../../graphql/sdk'
import { localStorageKeys } from '../../../utils/localStorageKeys'
import useAuthStore from '../../zustand/useAuthUserStore'

import { useLogout } from './useLogout'

gql`
  query MeQuery {
    meQuery {
      ...AuthUser
    }
  }
`

const useCheckAuthOrLogout = () => {
  // const logout = useLogoutAndPushIndex();
  const logout = useLogout()

  const [loading, setLoading] = useState(true)

  const setAuthUser = useAuthStore((s) => s.setAuthUser)

  const checkAuthOrLogout = async () => {
    const userCookieStr = localStorage.getItem(localStorageKeys.user)

    if (!userCookieStr) return setLoading(false)

    const user: AuthUserFragment = JSON.parse(userCookieStr)

    if (new Date(user.expiresAt) <= new Date()) {
      logout()
      return setLoading(false)
    }

    sdk
      .MeQuery()
      .then((res) => {
        setAuthUser(res.meQuery)
      })
      .catch(() => {
        logout()
      })
      .finally(() => setLoading(false))
  }

  return { checkAuthOrLogout, loading }
}

export default useCheckAuthOrLogout
