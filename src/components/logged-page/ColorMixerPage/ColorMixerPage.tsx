import { Box, Center } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { localStorageKeys } from '../../../utils/localStorageKeys'
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

  const { width: maxWidth } = useViewportSize()

  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    const canvasSrc = localStorage.getItem(localStorageKeys.canvasSrc)
    const canvas = canvasRef.current

    if (canvasSrc && canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const img = new Image()
        img.onload = () => {
          let imgWidth = img.width
          let imgHeight = img.height

          if (imgWidth > maxWidth) {
            imgWidth = maxWidth
            imgHeight = (img.height * maxWidth) / img.width
          }

          canvas.width = imgWidth
          canvas.height = imgHeight
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
        }
        img.src = canvasSrc
      }
    }
  }, [canvasRef.current])

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
                // max canva width = 100%

                const img = new Image()
                img.onload = () => {
                  let imgWidth = img.width
                  let imgHeight = img.height

                  if (imgWidth > maxWidth) {
                    imgWidth = maxWidth
                    imgHeight = (img.height * maxWidth) / img.width
                  }

                  canvas.width = imgWidth
                  canvas.height = imgHeight
                  ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
                  localStorage.setItem(
                    localStorageKeys.canvasSrc,
                    canvas.toDataURL()
                  )
                }
                img.src = URL.createObjectURL(file)
              }
            }
          }
        }}
      />
      <button
        onClick={() => {
          setIsZoomed(!isZoomed)
        }}
      >
        Zoom {isZoomed ? '2x' : '1x'}
      </button>

      <canvas
        id="canvas"
        ref={canvasRef}
        style={{
          touchAction: 'none',
          // zoom 2x
          transform: isZoomed ? 'scale(2)' : 'scale(1)',
          transformOrigin: 'top left',
        }}
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
      </FlexVCenter>

      <MixColorModal initialRgba={hoveringColor || 'rgba(0, 0, 0, 0)'} />

      <RawColorsModal />
    </Box>
  )
}

export default ColorMixerPage
