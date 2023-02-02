import { Flex } from '@mantine/core'
import React from 'react'

type Props = React.ComponentProps<typeof Flex>

const FlexVCenter = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Flex ref={ref} align="center" {...props} />
})

export default FlexVCenter
