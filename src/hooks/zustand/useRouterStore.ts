import { create } from 'zustand'

export type PageType = 'recipes' | 'monerate'

interface IStore {
  currentPage: PageType
  setCurrentPage: (currentPage: PageType) => void
}

const useRouterStore = create<IStore>((set, get) => ({
  currentPage: 'recipes',
  setCurrentPage: async (currentPage) => {
    set({ currentPage })
  },
}))

export default useRouterStore
