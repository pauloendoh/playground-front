import { create } from 'zustand'

export type PageType = 'recipes' | 'monerate' | 'monerate-expenses'

interface IStore {
  currentPage: PageType
  setCurrentPage: (currentPage: PageType) => void
}

const useRouterStore = create<IStore>((set, get) => ({
  currentPage: 'monerate',
  setCurrentPage: async (currentPage) => {
    set({ currentPage })
  },
}))

export default useRouterStore
