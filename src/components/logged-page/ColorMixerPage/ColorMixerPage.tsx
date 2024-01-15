import { Box, Button, Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import useMixColorModalStore from '../../../hooks/zustand/modals/useMixColorModalStore'
import useRawColorModalStore from '../../../hooks/zustand/modals/useRawColorModalStore'
import { localStorageKeys } from '../../../utils/localStorageKeys'
import FlexVCenter from '../../_common/flex/FlexVCenter'
import ImageCanvas from './ImageCanvas/ImageCanvas'
import MixColorModal from './MixColorModal/MixColorModal'
import RawColorsModal from './RawColorsModal/RawColorsModal'
import { getColorNameFromHex } from './getColorNameFromHex/getColorNameFromHex'
import { hexIsLight } from './hexIsLight/hexIsLight'

type Props = {}

const ColorMixerPage = (props: Props) => {
  const [hoveringHex, setHoveringHex] = React.useState<string>('')

  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const { width: viewPortWidth, height: viewPortHeight } = useViewportSize()

  const maxWidth = viewPortWidth - 32
  const maxHeight = viewPortHeight - 140

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    // disable pull to refresh
    document.body.style.overscrollBehavior = 'none'
    // disable scroll
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overscrollBehavior = 'auto'
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    const canvasSrc = localStorage.getItem(localStorageKeys.canvasSrc)
    const canvas = canvasRef.current

    if (canvasSrc && canvas) {
      loadImage(canvasSrc)
    }
  }, [canvasRef.current])

  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const { openModal: openMixColorModal } = useMixColorModalStore()
  const { openModal: openRawColorModal } = useRawColorModalStore()

  const loadImage = (imageSrc: string) => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const img = new Image()
        img.onload = () => {
          let imgWidth = img.width
          let imgHeight = img.height

          canvas.width = maxWidth
          canvas.height = maxHeight

          // centralize image
          // ctx.drawImage(img, 0, 0, imgWidth, imgHeight)

          ctx.drawImage(img, 0, 0, imgWidth, imgHeight)

          setImage(img)
          setContext(ctx)
          localStorage.setItem(localStorageKeys.canvasSrc, imageSrc)
        }
        img.src = imageSrc
      }
    }
  }

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
                const imageSrc = URL.createObjectURL(file)
                loadImage(imageSrc)
              }
            }}
          />
        </div>

        <Text onClick={() => openRawColorModal(null)}>Raw colors</Text>
      </FlexVCenter>

      <Box mt={16} />

      <ImageCanvas
        canvasRef={canvasRef}
        setHoveringHex={setHoveringHex}
        image={image}
        context={context}
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
        {hoveringHex && (
          <Button
            fullWidth
            sx={{
              backgroundColor: hoveringHex,
              borderRadius: 4,
              padding: '8px 16px',
              color: hexIsLight(hoveringHex) ? 'black' : 'white',
              ':hover': {
                backgroundColor: hoveringHex,
              },
            }}
            onClick={() => {
              openMixColorModal(hoveringHex)
            }}
            styles={{
              inner: {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              },
              label: {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'normal',
              },
            }}
          >
            <Text>{hoveringHex}</Text>
            <Text>{getColorNameFromHex(hoveringHex)}</Text>
          </Button>
        )}

        <MixColorModal />
        <RawColorsModal />
      </Box>
    </Box>
  )
}

export default ColorMixerPage
