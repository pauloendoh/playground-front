import { create } from 'zustand'
import MyIssueLabelInput from '../../react-query/monerate/issue-label/types/MyIssueLabelInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyIssueLabelInput
  openModal: (value?: MyIssueLabelInput) => void
  onClose: () => void
}

const useIssueLabelModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useIssueLabelModalStore
