import { create } from 'zustand'
import { MyExpenseInput } from '../../../types/domains/monerate/expense/MyExpenseInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyExpenseInput
  openModal: (value?: MyExpenseInput) => void
  onClose: () => void
}

const useExpenseModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useExpenseModalStore
