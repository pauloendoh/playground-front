import { useSavingsQuery } from './useSavingsQuery'

export const useLastSavingQueryUtils = () => {
  const { data } = useSavingsQuery()

  const lastSaving = data?.[0]
  return lastSaving
}
