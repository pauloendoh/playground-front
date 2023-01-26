import { create } from 'zustand'
import { MyRecipeInput } from '../../../types/domains/recipe/MyRecipeInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyRecipeInput
  openModal: (value?: MyRecipeInput) => void
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
