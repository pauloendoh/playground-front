import { create } from 'zustand'
import { AuthUserFragment } from '../../graphql/generated/graphql'

interface IAuthStore {
  authUser: AuthUserFragment | null
  setAuthUser: (authUser: AuthUserFragment) => void
}

const useAuthStore = create<IAuthStore>((set, get) => ({
  authUser: null,
  setAuthUser: async (authUser) => {
    set({ authUser })
    localStorage.setItem('user', JSON.stringify(authUser))
  },
}))
const initialState = useAuthStore.getState()
export const resetAuthStore = async () => {
  localStorage.removeItem('user')
  useAuthStore.setState(initialState, true)
}

export default useAuthStore
