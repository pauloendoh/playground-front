import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query IssueLabelsQuery {
    issueLabelsQuery {
      ...IssueLabel
    }
  }
`

export const useIssueLabelsQuery = () => {
  return useQuery({
    queryKey: queryKeys.issueLabels,
    queryFn: () => sdk.IssueLabelsQuery().then((res) => res.issueLabelsQuery),
  })
}
