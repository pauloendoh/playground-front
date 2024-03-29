import { useGesture } from '@use-gesture/react'
import React, { useEffect, useRef } from 'react'

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>
  setHoveringHex: (hex: string) => void
  image: HTMLImageElement | null
  context: CanvasRenderingContext2D | null
  zoomOut: boolean
}

const ImageCanvas = ({
  canvasRef,
  setHoveringHex,
  context,
  image,
  zoomOut,
}: Props) => {
  const isMouseDown = useRef(false)

  const startPanX = useRef<number>(0)
  const startPanY = useRef<number>(0)

  const panX = useRef<number>(0)
  const panY = useRef<number>(0)

  const zoom = useRef<number>(1)

  useEffect(() => {
    if (zoomOut) {
      zoom.current = 0.5
      redraw()
    }
  }, [zoomOut])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isMouseDown.current = true
    startPanX.current = e.clientX
    startPanY.current = e.clientY
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    isMouseDown.current = true
    startPanX.current = e.touches[0].clientX
    startPanY.current = e.touches[0].clientY
  }

  const handleMouseUp = () => {
    isMouseDown.current = false
  }

  const handleMouseMove = (clientX: number, clientY: number) => {
    if (!isMouseDown.current) {
      return
    }

    const deltaX = (startPanX.current - clientX) / zoom.current
    const deltaY = (startPanY.current - clientY) / zoom.current

    panX.current += deltaX
    panY.current += deltaY

    startPanX.current = clientX
    startPanY.current = clientY

    redraw()
  }

  const handleMouseWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    isMouseDown.current = false

    const zoomChange = -e.deltaY

    const newZoom = zoom.current + zoomChange / 500
    zoom.current = newZoom

    if (zoom.current < 0.5) {
      zoom.current = 0.5
    }
    if (zoom.current > 2) {
      zoom.current = 2
    }

    redraw()
  }

  useGesture(
    {
      onPinch: ({ delta: [scaledDelta], offset: [scale] }) => {
        const delta = scaledDelta / scale

        const newZoom = zoom.current + delta / 500
        zoom.current = newZoom

        if (zoom.current < 0.5) {
          zoom.current = 0.5
        }

        if (zoom.current > 2) {
          zoom.current = 2
        }

        redraw()
      },
    },
    {
      target: canvasRef,
      eventOptions: {
        passive: false,
      },
    }
  )

  const redraw = () => {
    if (!context || !canvasRef.current || !image) {
      return
    }

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    const perceivedWidth = image.width * zoom.current
    const perceivedHeight = image.height * zoom.current

    let dx = 0
    let dy = 0

    boundPan()

    context.drawImage(
      image,
      panX.current,
      panY.current,
      image.width,
      image.height,
      dx,
      dy,
      perceivedWidth,
      perceivedHeight
    )

    const centralPoint = context.getImageData(
      canvasRef.current.width / 2,
      canvasRef.current.height / 2,
      1,
      1
    ).data

    const hex =
      '#' +
      (
        '000000' + rgbToHex(centralPoint[0], centralPoint[1], centralPoint[2])
      ).slice(-6)
    setHoveringHex(hex)
  }

  function rgbToHex(r: number, g: number, b: number) {
    if (r > 255 || g > 255 || b > 255) {
      return 'Invalid color component'
    }

    return ((r << 16) | (g << 8) | b).toString(16)
  }

  const boundPan = () => {
    if (!image) {
      return
    }
    const padding = 50 * zoom.current
    if (panX.current - padding < -image.width) {
      panX.current = -image.width + padding
    }
    if (panX.current + padding > image.width) {
      panX.current = image.width - padding
    }

    if (panY.current - padding < -image.height) {
      panY.current = -image.height + padding
    }

    if (panY.current + padding > image.height) {
      panY.current = image.height - padding
    }
  }

  const handleChangeZoom = () => {
    if (zoom.current === 1) {
      zoom.current = 2
    } else {
      zoom.current = 1
    }

    redraw()
  }

  return (
    <div className="ImageCanvas" style={{ position: 'relative' }}>
      <canvas
        id="canvas"
        ref={canvasRef}
        style={{
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
              // setHoveringHex(hex)
            }
          }
        }}
        // on touch drag

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

              // setHoveringHex(hex)
            }
          }
        }}
        onMouseDown={(e) => {
          handleMouseDown(e)
        }}
        onMouseUp={handleMouseUp}
        onPointerMove={(e) => {
          console.log('pointer move')
          handleMouseMove(e.clientX, e.clientY)
        }}
        onWheel={handleMouseWheel} // to test on chrome web responsive
        onTouchStart={(e) => {
          console.log('touch start')
          handleTouchStart(e)
        }}
        onTouchEnd={handleMouseUp}
        onTouchMove={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleMouseMove(e.touches[0].clientX, e.touches[0].clientY)
        }}
        onDoubleClick={handleChangeZoom}
      />

      {/* central point. Make a circle */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: 'red',
          transform: 'translate(-50%, -50%)',
          userSelect: 'none', // non selectable
        }}
      >
        ◯
      </div>
    </div>
  )
}

export default ImageCanvas
