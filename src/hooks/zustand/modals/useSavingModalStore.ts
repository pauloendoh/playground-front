import { create } from 'zustand'
import { MySavingValidInput } from '../../../types/domains/monerate/saving/MySavingValidInput'

interface IStore {
  isOpen: boolean
  initialValue?: MySavingValidInput
  openModal: (value?: MySavingValidInput) => void
  onClose: () => void
}

const useSavingModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useSavingModalStore
