import { useMantineTheme } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"

export const useMyMediaQuery = () => {
  const {width} = useViewportSize()

  const theme = useMantineTheme()


  const isMobile = width <= theme.breakpoints.sm

  return  {
    isMobile
  } 
}