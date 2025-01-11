import { create } from 'zustand'
import { MyWishlistItemValidInput } from '../../../types/domains/monerate/wishlist-item/MyWishlistItemValidInput'

interface IStore {
  isOpen: boolean
  initialValue?: MyWishlistItemValidInput
  openModal: (value?: MyWishlistItemValidInput) => void
  onClose: () => void
}

export const useWishlistItemModalStore = create<IStore>((set, get) => ({
  isOpen: false,
  initialValue: undefined,
  openModal: (value) => {
    set({ isOpen: true, initialValue: value })
  },

  onClose: () => {
    set({ isOpen: false })
  },
}))
