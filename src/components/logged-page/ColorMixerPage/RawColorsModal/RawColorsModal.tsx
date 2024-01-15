import { Button, ColorInput, Divider, Modal, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { RawColorFragment } from '../../../../graphql/generated/graphql'
import { useRawColorsQuery } from '../../../../hooks/react-query/colors/raw-color/useRawColorsQuery'
import { useSaveRawColorMutation } from '../../../../hooks/react-query/colors/raw-color/useSaveRawColorMutation'
import useRawColorModalStore from '../../../../hooks/zustand/modals/useRawColorModalStore'
import { MyRawColorInput } from '../../../../types/domains/colors/raw-color/MyRawColorInput'
import FlexCol from '../../../_common/flex/FlexCol'
import FlexVCenter from '../../../_common/flex/FlexVCenter'
import MyTextInput from '../../../_common/inputs/MyTextInput'
import { hexIsLight } from '../hexIsLight/hexIsLight'

type Props = {}

const RawColorsModal = (props: Props) => {
  const { data: rawColors } = useRawColorsQuery()

  const { isOpen, onClose } = useRawColorModalStore()

  const [selectedColor, setSelectedColor] = useState<RawColorFragment | null>(
    null
  )
  useEffect(() => {
    if (isOpen) {
      setSelectedColor(null)
    }
  }, [isOpen])

  const { mutate: submitSave } = useSaveRawColorMutation()

  const [name, setName] = useState('')
  const [hex, setHex] = useState('')

  return (
    <Modal
      fullScreen
      onClose={() => {
        onClose()
      }}
      opened={isOpen}
      title={selectedColor ? 'Editing color' : 'New color'}
    >
      <FlexCol gap={16}>
        <FlexCol gap={8}>
          <MyTextInput
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />

          <ColorInput
            placeholder="Pick a color"
            label="Color"
            value={hex}
            onChange={(hex) => {
              setHex(hex)
            }}
          />
        </FlexCol>

        <Button
          onClick={() => {
            const input = new MyRawColorInput()
            input.name = name
            input.color = hex
            if (selectedColor?.id) {
              input.id = selectedColor.id
            }
            submitSave(input)
          }}
        >
          Save
        </Button>
      </FlexCol>

      {rawColors && rawColors.length > 0 && (
        <>
          <Divider my={16} />
          <Title order={2}>
            {rawColors.length} color{rawColors.length > 1 ? 's' : ''}
          </Title>

          {/* grid 2 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px ',
              marginTop: '16px',
            }}
          >
            {[...rawColors]
              ?.sort((a, b) => {
                // last updated first
                return b.updatedAt.localeCompare(a.updatedAt)
              })
              .map((rawColor) => {
                return (
                  <FlexVCenter
                    onClick={() => {
                      setSelectedColor(rawColor)
                      setName(rawColor.name)
                      setHex(rawColor.color)
                    }}
                    key={rawColor.id}
                    style={{
                      backgroundColor: rawColor.color,
                      width: '100%',
                      padding: '8px 16px',
                      borderRadius: 4,
                      color: hexIsLight(rawColor.color) ? 'black' : 'white',
                    }}
                  >
                    <FlexCol align={'center'} justify={'center'} w="100%">
                      <span>{rawColor.name}</span>
                      <span>{rawColor.color}</span>
                    </FlexCol>
                  </FlexVCenter>
                )
              })}
          </div>
        </>
      )}
    </Modal>
  )
}

export default RawColorsModal
