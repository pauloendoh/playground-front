import { persist } from 'zustand/middleware'

import { create } from 'zustand'

interface IStore {
  filterByIsSolved: boolean
  toggleFilterByIsSolved: () => void

  highlightTop: number
  setHighlightTop: (value: number) => void

  filterIssueLabelIds: string[]
  setFilterIssueLabelIds: (value: string[]) => void
}

const useIssueFilterStore = create(
  persist<IStore>(
    (set, get) => ({
      filterByIsSolved: false,
      toggleFilterByIsSolved: () => {
        set((state) => ({
          filterByIsSolved: !state.filterByIsSolved,
        }))
      },

      highlightTop: 5,
      setHighlightTop: (value: number) => {
        set((state) => ({
          highlightTop: value,
        }))
      },

      filterIssueLabelIds: [],
      setFilterIssueLabelIds: (value: string[]) => {
        set((state) => ({
          filterIssueLabelIds: value,
        }))
      },
    }),
    {
      name: 'issue-filter',
    }
  )
)

export default useIssueFilterStore
