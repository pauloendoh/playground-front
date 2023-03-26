import { Box, Button, Center, Modal } from '@mantine/core'
import { useEffect, useState } from 'react'

type Props = {
  initialRgba: string
}

const MixColorModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const [color, setColor] = useState(props.initialRgba)

  useEffect(() => {
    if (isOpen) {
      setColor(props.initialRgba)
    }
  }, [isOpen])

  return (
    <>
      {
        <Button
          onClick={() => {
            setIsOpen(true)
          }}
        >
          Mix
        </Button>
      }

      <Modal onClose={() => setIsOpen(false)} opened={isOpen} title="Mixing">
        <Box>
          <Center
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
            }}
          >
            {color}
          </Center>
        </Box>
      </Modal>
    </>
  )
}

export default MixColorModal
