import { TextInput } from '@mantine/core'
import React from 'react'

type Props = React.ComponentProps<typeof TextInput>

const MyTextinput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <TextInput ref={ref} autoComplete="off" {...props} />
})

export default MyTextinput
