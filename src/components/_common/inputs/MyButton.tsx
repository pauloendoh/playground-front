import { Button, ButtonProps } from '@mantine/core'
import React from 'react'

const MyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        sx={{
          height: 'unset',
          ...props.sx,
        }}
      />
    )
  }
)

export default MyButton
