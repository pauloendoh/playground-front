import { Box, Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import useMixColorModalStore from '../../../hooks/zustand/modals/useMixColorModalStore'
import useRawColorModalStore from '../../../hooks/zustand/modals/useRawColorModalStore'
import { localStorageKeys } from '../../../utils/localStorageKeys'
import FlexVCenter from '../../_common/flex/FlexVCenter'
import MixColorModal from './MixColorModal/MixColorModal'
import RawColorsModal from './RawColorsModal/RawColorsModal'
import { getColorNameFromHex } from './getColorNameFromHex/getColorNameFromHex'
import { hexIsLight } from './hexIsLight/hexIsLight'

type Props = {}

const ColorMixerPage = (props: Props) => {
  const [file, setFile] = React.useState<File | null>(null)
  const [hoveringHex, setHoveringHex] = React.useState<string>('')
  const [color, setColor] = React.useState('')

  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { width: viewPortSize } = useViewportSize()

  const maxWidth = viewPortSize - 32

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

  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const { openModal: openMixColorModal } = useMixColorModalStore()

  const { openModal: openRawColorModal } = useRawColorModalStore()
  return (
    <Box>
      <FlexVCenter justify={'space-between'}>
        <div>
          <Text
            onClick={() => {
              fileInputRef.current?.click()
            }}
          >
            Change image
          </Text>
          <input
            ref={fileInputRef}
            id="file"
            style={{
              display: 'none',
            }}
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
        </div>

        <Text onClick={() => openRawColorModal(null)}>Raw colors</Text>

        {/* <button
          onClick={() => {
            setIsZoomed(!isZoomed)
          }}
        >
          Zoom {isZoomed ? '2x' : '1x'}
        </button> */}
      </FlexVCenter>

      <Box mt={16} />

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

              const hex = `#${data[0].toString(16)}${data[1].toString(
                16
              )}${data[2].toString(16)}`
              setHoveringHex(hex)
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

              const hex = `#${data[0].toString(16)}${data[1].toString(
                16
              )}${data[2].toString(16)}`

              setHoveringHex(hex)
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

              const hex = `#${data[0].toString(16)}${data[1].toString(
                16
              )}${data[2].toString(16)}`

              setHoveringHex(hex)
            }
          }
        }}
      />

      <Box
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px',
        }}
      >
        <FlexVCenter
          gap={16}
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            backgroundColor: hoveringHex,
            borderRadius: 4,
            padding: '8px 16px',
            color: hexIsLight(hoveringHex) ? 'black' : 'white',
          }}
          onClick={() => {
            openMixColorModal(hoveringHex)
          }}
        >
          <Text>{hoveringHex}</Text>
          <Text>{getColorNameFromHex(hoveringHex)}</Text>
        </FlexVCenter>

        <MixColorModal />
        <RawColorsModal />
      </Box>
    </Box>
  )
}

export default ColorMixerPage
