import { create } from 'zustand'

interface IStore {
  isOpen: boolean
  openModal: () => void
  onClose: () => void
}

const useIssueInsightsModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: () => {
    set({ isOpen: true })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useIssueInsightsModalStore
