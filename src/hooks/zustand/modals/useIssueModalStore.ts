import { create } from 'zustand'
import { MyIssueInput } from '../../../types/domains/monerate/issue/MyIssueInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyIssueInput
  openModal: (value?: MyIssueInput) => void
  onClose: () => void
}

const useIssueModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useIssueModalStore
