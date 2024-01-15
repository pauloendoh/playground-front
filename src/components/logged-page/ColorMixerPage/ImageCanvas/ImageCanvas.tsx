import React, { useRef, useState } from 'react'

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>
  setHoveringHex: (hex: string) => void
  image: HTMLImageElement | null
  context: CanvasRenderingContext2D | null
}

const ImageCanvas = ({ canvasRef, setHoveringHex, context, image }: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  const startPanX = useRef<number>(0)
  const startPanY = useRef<number>(0)

  const panX = useRef<number>(0)
  const panY = useRef<number>(0)

  const zoom = useRef<number>(1)

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsMouseDown(true)
    startPanX.current = e.clientX
    startPanY.current = e.clientY
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    setIsMouseDown(true)
    startPanX.current = e.touches[0].clientX
    startPanY.current = e.touches[0].clientY
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseMove = (clientX: number, clientY: number) => {
    if (!isMouseDown) {
      return
    }

    const deltaX = startPanX.current - clientX
    const deltaY = startPanY.current - clientY

    panX.current += deltaX
    panY.current += deltaY

    startPanX.current = clientX
    startPanY.current = clientY

    redraw()
  }

  const handleMouseWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    setIsMouseDown(false)

    const zoomChange = -e.deltaY

    const newZoom = zoom.current + zoomChange / 4
    zoom.current = newZoom

    if (zoom.current < 0.75) {
      zoom.current = 0.75
    }
    if (zoom.current > 3) {
      zoom.current = 3
    }

    redraw()
  }

  const redraw = () => {
    if (!context || !canvasRef.current || !image) {
      return
    }

    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    const perceivedWidth = image.width * zoom.current
    const perceivedHeight = image.height * zoom.current

    let dx = 0
    let dy = 0

    if (zoom.current > 1) {
      dx = -perceivedHeight / 4
      dy = -perceivedWidth / 4
    }

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

    const centralPointHex = `#${centralPoint[0].toString(
      16
    )}${centralPoint[1].toString(16)}${centralPoint[2].toString(16)}`
    setHoveringHex(centralPointHex)
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
    } else if (zoom.current === 2) {
      zoom.current = 3
    } else if (zoom.current === 3) {
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
        // onWheel={handleMouseWheel}
        onTouchStart={(e) => {
          console.log('touch start')
          handleTouchStart(e)
        }}
        onTouchEnd={handleMouseUp}
        onTouchMove={(e) => {
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
