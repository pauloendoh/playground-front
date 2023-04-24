import { create } from 'zustand'

interface IStore {
  isOpen: boolean
  openModal: () => void
  onClose: () => void
}

const useAverageMonthlyGrowthModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  openModal: () => {
    set({ isOpen: true })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useAverageMonthlyGrowthModalStore
