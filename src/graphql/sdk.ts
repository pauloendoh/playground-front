import { ClientError, GraphQLClient } from 'graphql-request'
import { localStorageKeys } from '../utils/localStorageKeys'
import { myNotifications } from '../utils/mantine/myNotifications'
import { getSdk } from './generated/graphql'

const GRAPHQL_URL = String(import.meta.env.VITE_GRAPHQL_URL)

const client = new GraphQLClient(GRAPHQL_URL, {
  requestMiddleware: (req) => {
    const userStr = localStorage.getItem(localStorageKeys.user)

    return {
      ...req,
      headers: {
        ...req.headers,
        'x-auth-token': userStr ? JSON.parse(userStr).token : '',
      },
    }
  },
  responseMiddleware: (res: any) => {
    if (res instanceof ClientError) {
      myNotifications.error(res.response.errors?.[0]?.message || 'Error')
    }
  },
})

export const sdk = getSdk(client)
