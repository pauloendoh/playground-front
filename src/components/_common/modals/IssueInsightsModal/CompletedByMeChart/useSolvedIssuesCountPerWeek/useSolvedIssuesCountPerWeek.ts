import { DateTime } from 'luxon'
import { useMemo } from 'react'
import { useIssuesQuery } from '../../../../../../hooks/react-query/monerate/issue/useIssuesQuery'

type IdeaCount = {
  LLLyy: string
  count: number
}

export const useSolvedIssuesCountPerMonth = () => {
  const { data: issues } = useIssuesQuery()

  const solvedIssues = useMemo(
    () => issues?.filter((i) => !!i.solvedAt) || [],
    [issues]
  )

  const solvedIssuesCountPerMonth = useMemo(() => {
    const ideaCounts: IdeaCount[] = []

    for (const i of solvedIssues) {
      if (!i.solvedAt) return
      const date = DateTime.fromISO(i.solvedAt)
      const ideaCount = ideaCounts.find(
        (ic) => ic.LLLyy === date.toFormat('LLLyy')
      )

      if (ideaCount) {
        ideaCount.count = ideaCount.count + i.frequency * i.intensity
        continue
      }

      ideaCounts.push({
        LLLyy: date.toFormat('LLLyy'),
        count: i.frequency * i.intensity,
      })
    }

    return ideaCounts.sort(
      (a, b) =>
        DateTime.fromFormat(a.LLLyy, 'LLLyy').toMillis() -
        DateTime.fromFormat(b.LLLyy, 'LLLyy').toMillis()
    )
  }, [solvedIssues])

  return solvedIssuesCountPerMonth
}
