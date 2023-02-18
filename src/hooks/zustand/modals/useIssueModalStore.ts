import { create } from 'zustand'
import { MyIssueValidInput } from '../../../types/domains/monerate/issue/MyIssueValidInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyIssueValidInput
  openModal: (value?: MyIssueValidInput) => void
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
