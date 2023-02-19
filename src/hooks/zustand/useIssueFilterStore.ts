import { create } from 'zustand'

interface IStore {
  filterByIsSolved: boolean
  toggleFilterByIsSolved: () => void
}

const useIssueFilterStore = create<IStore>((set, get) => ({
  filterByIsSolved: false,
  toggleFilterByIsSolved: () => {
    set((state) => ({
      filterByIsSolved: !state.filterByIsSolved,
    }))
  },
}))

export default useIssueFilterStore
