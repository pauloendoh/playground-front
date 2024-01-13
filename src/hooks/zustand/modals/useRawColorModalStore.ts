import { create } from 'zustand'
import { RawColorFragment } from '../../../graphql/generated/graphql'

interface IStore {
  isOpen: boolean
  initialValue: RawColorFragment | null
  openModal: (value: RawColorFragment | null) => void
  onClose: () => void
}

const useRawColorModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: null,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))

export default useRawColorModalStore
