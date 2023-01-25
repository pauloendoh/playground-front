import { create } from 'zustand'
import { MyRecipeValidInput } from '../../../types/domains/recipe/MyRecipeValidInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyRecipeValidInput
  openModal: (value?: MyRecipeValidInput) => void
  onClose: () => void
}

const useRecipeModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useRecipeModalStore
