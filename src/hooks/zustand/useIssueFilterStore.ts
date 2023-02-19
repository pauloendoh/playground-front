import { create } from 'zustand'

interface IStore {
  filterByIsSolved: boolean
  toggleFilterByIsSolved: () => void

  highlightTop: number
  setHighlightTop: (value: number) => void
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
}))

export default useIssueFilterStore
