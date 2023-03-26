import { Box, Center } from '@mantine/core'
import React, { useState } from 'react'
import FlexVCenter from '../../_common/flex/FlexVCenter'
import MixColorModal from './MixColorModal/MixColorModal'
import RawColorsModal from './RawColorsModal/RawColorsModal'

type Props = {}

const ColorMixerPage = (props: Props) => {
  const [file, setFile] = React.useState<File | null>(null)
  const [hoveringColor, setHoveringColor] = React.useState<string | null>(null)
  const [color, setColor] = React.useState('rgba(0, 0, 0, 0)')

  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Box>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) {
            setFile(file)
            // load image file on canvas
            const canvas = canvasRef.current
            if (canvas) {
              const ctx = canvas.getContext('2d')
              if (ctx) {
                const img = new Image()
                img.onload = () => {
                  canvas.width = img.width
                  canvas.height = img.height
                  ctx.drawImage(img, 0, 0)
                }
                img.src = URL.createObjectURL(file)

                // max canva width = 100%
                canvas.style.width = '100%'
                canvas.style.height = 'auto'
              }
            }
          }
        }}
      />

      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={(e) => {
          const canvas = canvasRef.current
          if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
              const rect = canvas.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const pixel = ctx.getImageData(x, y, 1, 1)
              const data = pixel.data

              const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`
              setHoveringColor(rgba)
            }
          }
        }}
        // on touch drag
        onTouchMove={(e) => {
          const canvas = canvasRef.current
          if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
              const rect = canvas.getBoundingClientRect()
              const x = e.touches[0].clientX - rect.left
              const y = e.touches[0].clientY - rect.top
              const pixel = ctx.getImageData(x, y, 1, 1)
              const data = pixel.data

              const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`
              setHoveringColor(rgba)
            }
          }
        }}
        onClick={(e) => {
          const canvas = canvasRef.current
          if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
              const rect = canvas.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const pixel = ctx.getImageData(x, y, 1, 1)
              const data = pixel.data

              const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`
              setColor(rgba)
            }
          }
        }}
        // zoom image via pitch gesture
        onWheel={(e) => {
          const canvas = canvasRef.current
          if (canvas) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
              const rect = canvas.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const pixel = ctx.getImageData(x, y, 1, 1)
              const data = pixel.data

              const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`
              setColor(rgba)
            }
          }
        }}
      />

      <FlexVCenter gap={16}>
        <Center
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: hoveringColor || 'white',
          }}
        >
          {hoveringColor}
        </Center>

        <Center
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
          }}
        >
          {color}
        </Center>
      </FlexVCenter>

      <MixColorModal initialRgba={color} />

      <RawColorsModal />
    </Box>
  )
}

export default ColorMixerPage
