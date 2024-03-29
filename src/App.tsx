import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  LoadingOverlay,
  MantineProvider,
} from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useLocalStorage } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { DeepPartial } from 'react-hook-form'
import GlobalModals from './components/_common/modals/GlobalModals'
import LandingPage from './components/landing-page/LandingPage/LandingPage'
import HomePage from './components/logged-page/HomePage/HomePage'
import useCheckAuthOrLogout from './hooks/domains/auth/useCheckAuthOrLogout'
import useAuthStore from './hooks/zustand/useAuthUserStore'
import { localStorageKeys } from './utils/localStorageKeys'
import { myTheme } from './utils/myTheme'

function App() {
  const [count, setCount] = useState(0)

  const [queryClient] = useState(new QueryClient())

  const authUser = useAuthStore((s) => s.authUser)
  const { checkAuthOrLogout, loading } = useCheckAuthOrLogout()

  const [colorScheme, setColorScheme] = useLocalStorage<
    DeepPartial<ColorScheme>
  >({
    key: localStorageKeys.colorScheme,
    defaultValue: 'dark',
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    checkAuthOrLogout()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ ...myTheme, colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Notifications />

          <Box
            sx={{
              height: '100vh',
            }}
          >
            <LoadingOverlay visible={loading} overlayOpacity={1} />

            {authUser ? (
              <>
                <HomePage />
                <GlobalModals />
              </>
            ) : (
              <LandingPage />
            )}
          </Box>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  )
}

export default App
