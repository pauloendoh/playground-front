import { resetAuthStore } from '../../zustand/useAuthUserStore'

export const useLogout = () => {
  // const { showSuccessToast } = useMyToast()
  // const axios = useAxios()

  const logout = async () => {
    resetAuthStore()
    // showSuccessToast("Logged out!")
  }
  return logout
}
