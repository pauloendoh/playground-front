import { create } from 'zustand'
import { MyCurrentSavingValidInput } from '../../../types/domains/monerate/current-saving/MyCurrentSavingValidInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyCurrentSavingValidInput
  openModal: (value?: MyCurrentSavingValidInput) => void
  onClose: () => void
}

const useCurrentSavingModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useCurrentSavingModalStore
