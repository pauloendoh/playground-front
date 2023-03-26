import { Button, Center, ColorPicker, Modal } from '@mantine/core'
import { useEffect, useState } from 'react'
import { RawColorFragment } from '../../../../graphql/generated/graphql'
import { useRawColorsQuery } from '../../../../hooks/react-query/colors/raw-color/useRawColorsQuery'
import { useSaveRawColorMutation } from '../../../../hooks/react-query/colors/raw-color/useSaveRawColorMutation'
import { MyRawColorInput } from '../../../../types/domains/colors/raw-color/MyRawColorInput'
import FlexCol from '../../../_common/flex/FlexCol'
import MyTextInput from '../../../_common/inputs/MyTextInput'

type Props = {}

const RawColorsModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { data: rawColors } = useRawColorsQuery()

  const [selectedColor, setSelectedColor] = useState<RawColorFragment | null>(
    null
  )
  useEffect(() => {
    if (isOpen) {
      setSelectedColor(null)
    }
  }, [isOpen])

  const { mutate } = useSaveRawColorMutation()

  const [name, setName] = useState('')
  const [color, setColor] = useState('')

  return (
    <>
      <Button onClick={() => setIsOpen(true)} color="yellow">
        Raw Colors
      </Button>

      <Modal
        onClose={() => {
          setIsOpen(false)
        }}
        opened={isOpen}
        title={selectedColor ? 'Editing color' : 'New color'}
      >
        <MyTextInput
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <ColorPicker
          value={color}
          onChange={(color) => {
            setColor(color)
          }}
          format="rgba"
        />
        <MyTextInput label="Color" value={color} />

        <Button
          onClick={() => {
            const input = new MyRawColorInput()
            input.name = name
            input.color = color
            if (selectedColor?.id) {
              input.id = selectedColor.id
            }
            mutate(input)
          }}
        >
          Save
        </Button>

        {rawColors
          ?.sort((a, b) => {
            // last updated first
            return b.updatedAt.localeCompare(a.updatedAt)
          })
          .map((rawColor) => {
            return (
              <Center
                onClick={() => {
                  setSelectedColor(rawColor)
                  setName(rawColor.name)
                  setColor(rawColor.color)
                }}
                key={rawColor.id}
                style={{
                  backgroundColor: rawColor.color,
                  width: '100px',
                  height: '100px',
                  // contrast color
                }}
              >
                <FlexCol align={'center'}>
                  <div>{rawColor.name}</div>
                  <div
                    style={{
                      color: 'black',
                      textAlign: 'center',
                    }}
                  >
                    {rawColor.color}
                  </div>
                </FlexCol>
              </Center>
            )
          })}
      </Modal>
    </>
  )
}

export default RawColorsModal
