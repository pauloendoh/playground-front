import { useQuery } from '@tanstack/react-query'
import gql from 'graphql-tag'
import { sdk } from '../../../../graphql/sdk'
import { queryKeys } from '../../../../utils/queryKeys'

gql`
  query SalaryQuery {
    salaryQuery {
      ...Salary
    }
  }
`

export const fetchSalary = () =>
  sdk.SalaryQuery().then((res) => res.salaryQuery)

export const useSalaryQuery = () => {
  return useQuery({
    queryKey: queryKeys.salary,
    queryFn: fetchSalary,
  })
}
