import { useMantineTheme } from '@mantine/core'
import React, { useMemo } from 'react'
import ReactLinkify from 'react-linkify'

type Props = React.ComponentProps<typeof ReactLinkify> & {
  openNewTab?: boolean
  truncateWidth?: number
  stopPropagation?: boolean
}

const MyReactLinkify = (props: Props) => {
  const theme = useMantineTheme()

  const truncateStyles = useMemo<React.CSSProperties>(() => {
    if (!props.truncateWidth) return {}
    return {
      // ellipsis
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block',
      width: props.truncateWidth,
    }
  }, [props.truncateWidth])

  const componentDecorator = (href: string, text: string, key: number) => (
    <a
      href={href}
      key={key}
      target={props.openNewTab ? '_blank' : undefined}
      rel={props.openNewTab ? 'noopener noreferrer' : undefined}
      style={{
        color: theme.colors.primary[5],
        fontWeight: 'inherit',
        textDecoration: 'underline',

        ...truncateStyles,
      }}
      onClick={(e) => {
        if (props.stopPropagation) e.stopPropagation()
      }}
    >
      {text}
    </a>
  )

  return <ReactLinkify componentDecorator={componentDecorator} {...props} />
}

export default MyReactLinkify
