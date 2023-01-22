import { GraphQLClient } from 'graphql-request'
import { localStorageKeys } from '../utils/localStorageKeys'
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
})

export const sdk = getSdk(client)
