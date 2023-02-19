import { create } from 'zustand'

interface IStore {
  filterByIsSolved: boolean
  toggleFilterByIsSolved: () => void

  highlightTop: number
  setHighlightTop: (value: number) => void

  filterIssueLabelIds: string[]
  setFilterIssueLabelIds: (value: string[]) => void
}

const useIssueFilterStore = create<IStore>((set, get) => ({
  filterByIsSolved: false,
  toggleFilterByIsSolved: () => {
    set((state) => ({
      filterByIsSolved: !state.filterByIsSolved,
    }))
  },

  highlightTop: 0,
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
}))

export default useIssueFilterStore
