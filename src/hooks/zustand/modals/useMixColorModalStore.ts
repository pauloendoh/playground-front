import { create } from 'zustand'

interface IStore {
  isOpen: boolean
  initialValue: string
  openModal: (value: string) => void
  onClose: () => void
}

const useMixColorModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: '',
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useMixColorModalStore
