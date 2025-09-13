import { useMemo } from 'react'
import { useSavingsQuery } from './useSavingsQuery'

export const useLastSavingQueryUtils = () => {
  const { data } = useSavingsQuery()

  const lastSaving = useMemo(() => {
    return data?.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })[0]
  }, [data])

  return lastSaving
}
