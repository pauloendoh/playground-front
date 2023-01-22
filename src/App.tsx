import { Box, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useEffect, useState } from 'react'
import LandingPage from './components/landing-page/LandingPage/LandingPage'
import HomePage from './components/logged-page/HomePage/HomePage'
import useCheckAuthOrLogout from './hooks/domains/auth/useCheckAuthOrLogout'
import useAuthStore from './hooks/zustand/useAuthUserStore'

function App() {
  const [count, setCount] = useState(0)

  const queryClient = new QueryClient()

  const authUser = useAuthStore((s) => s.authUser)
  const { checkAuthOrLogout } = useCheckAuthOrLogout()

  useEffect(() => {
    checkAuthOrLogout()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Box
          sx={{
            height: '100vh',
            background: '#ececec',
          }}
        >
          {authUser ? <HomePage /> : <LandingPage />}
        </Box>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
