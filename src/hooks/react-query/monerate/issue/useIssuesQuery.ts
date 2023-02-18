import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query IssuesQuery {
    issuesQuery {
      ...Issue
    }
  }
`

export const useIssuesQuery = () => {
  return useQuery({
    queryKey: queryKeys.issues,
    queryFn: () => sdk.IssuesQuery().then((res) => res.issuesQuery),
  })
}
