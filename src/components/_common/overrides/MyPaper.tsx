import {
  Paper,
  PaperProps,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import React, { useMemo } from 'react'

type Props = PaperProps

const MyPaper = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  const backgroundColor = useMemo(() => {
    if (colorScheme === 'dark') {
      return theme.colors.dark[5]
    }
    return 'white'
  }, [colorScheme])
  return (
    <Paper
      {...props}
      ref={ref}
      sx={{
        backgroundColor,
        padding: 16,
        ...props.sx,
      }}
    />
  )
})

export default MyPaper
