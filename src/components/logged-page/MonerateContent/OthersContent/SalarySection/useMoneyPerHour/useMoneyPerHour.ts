import { useMemo } from 'react'
import { useSalaryQuery } from '../../../../../../hooks/react-query/monerate/salary/useSalaryQuery'

export const useMoneyPerHour = () => {
  const { data: salary } = useSalaryQuery()
  const result = useMemo(() => {
    if (!salary) return undefined

    const hoursPerDay = salary.jobHoursPerMonth
    return (salary.value ?? 0) / (hoursPerDay * 20)
  }, [salary?.value, salary?.jobHoursPerMonth])

  return result
}
