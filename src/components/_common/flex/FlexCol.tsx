import { Flex } from '@mantine/core'
import React from 'react'

type Props = React.ComponentProps<typeof Flex>

const FlexCol = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Flex ref={ref} direction="column" {...props} />
})

export default FlexCol
