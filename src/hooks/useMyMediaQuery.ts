import { useMantineTheme } from '@mantine/core'
import { useMediaQuery, useViewportSize } from '@mantine/hooks'

export const useMyMediaQuery = () => {
  const { width } = useViewportSize()

  const theme = useMantineTheme()

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)

  return {
    isMobile,
  }
}
