import { DateTime } from 'luxon'
import { useMemo } from 'react'
import { useIssuesQuery } from '../../../../hooks/react-query/monerate/issue/useIssuesQuery'

export const useIssuesLastWeekCount = () => {
  const { data: issues } = useIssuesQuery()

  const issuesLastWeekCount = useMemo(() => {
    let count = 0

    for (const i of issues || []) {
      if (!i.solvedAt) continue

      const date = DateTime.fromISO(i.solvedAt)
      const diff = DateTime.local().diff(date, 'days').days

      if (diff <= 7) {
        count += i.frequency * i.intensity
      }
    }

    return count
  }, [issues])

  return issuesLastWeekCount
}
