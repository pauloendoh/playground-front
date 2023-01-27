import { create } from 'zustand'
import { MyCategoryInput } from '../../react-query/monerate/category/types/MyCategoryInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyCategoryInput
  openModal: (value?: MyCategoryInput) => void
  onClose: () => void
}

const useCategoryModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useCategoryModalStore
