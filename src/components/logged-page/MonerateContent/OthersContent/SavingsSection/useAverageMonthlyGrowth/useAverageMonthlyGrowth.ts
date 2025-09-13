import { useMemo } from 'react'
import { useLastSavingQueryUtils } from '../../../../../../hooks/react-query/monerate/saving/useLastSavingQueryUtils'
import { useSavingsQuery } from '../../../../../../hooks/react-query/monerate/saving/useSavingsQuery'

export const useAverageMonthlyGrowth = () => {
  const lastSaving = useLastSavingQueryUtils()

  const { data } = useSavingsQuery()

  const selectedSaving = useMemo(() => {
    return data?.find((s) => s.selectedAsAverageMonthlyGrowth)
  }, [data])

  const averageMonthlyGrowth = useMemo(() => {
    if (!lastSaving || !selectedSaving) return 0

    const datetimeDiff = Math.abs(
      new Date(lastSaving.date).getTime() -
        new Date(selectedSaving.date).getTime()
    )

    const daysDiff = datetimeDiff / (1000 * 3600 * 24)

    const valuesDiff = Math.abs(
      Number(lastSaving.value) - Number(selectedSaving.value)
    )

    const avgValueDay = valuesDiff / daysDiff

    const averageMonthlyGrowth = avgValueDay * 30

    return averageMonthlyGrowth
  }, [lastSaving, selectedSaving])

  return averageMonthlyGrowth
}
