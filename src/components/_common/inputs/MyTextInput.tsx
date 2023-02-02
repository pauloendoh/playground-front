import { TextInput } from '@mantine/core'
import React from 'react'

type Props = React.ComponentProps<typeof TextInput>

const MyTextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <TextInput ref={ref} autoComplete="off" {...props} />
})

export default MyTextInput
