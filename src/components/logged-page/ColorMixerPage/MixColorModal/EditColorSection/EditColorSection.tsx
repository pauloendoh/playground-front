import { ActionIcon, Button, Text } from '@mantine/core'
import { pushOrReplace } from 'endoh-utils'
import { useEffect, useMemo, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import {
  ColorProportionInput,
  RawColorFragment,
} from '../../../../../graphql/generated/graphql'
import { useDeleteMixedColorMutation } from '../../../../../hooks/react-query/colors/mixed-color/useDeleteMixedColorMutation'
import { useMixedColorsQuery } from '../../../../../hooks/react-query/colors/mixed-color/useMixedColorsQuery'
import { useSaveMixedColorMutation } from '../../../../../hooks/react-query/colors/mixed-color/useSaveMixedColorsMutation'
import useMixColorModalStore from '../../../../../hooks/zustand/modals/useMixColorModalStore'
import { MyColorProportionInput } from '../../../../../types/domains/colors/mixed-color/MyColorProportionInput'
import { MyMixedColorInput } from '../../../../../types/domains/colors/mixed-color/MyMixedColorInput'
import FlexCol from '../../../../_common/flex/FlexCol'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'
import { getColorNameFromHex } from '../../getColorNameFromHex/getColorNameFromHex'
import { hexIsLight } from '../../hexIsLight/hexIsLight'
import ColorProportionOption from '../ColorProportionOption/ColorProportionOption'
import RawColorSelector from '../RawColorSelector/RawColorSelector'
import ColorProportionSquare from './ColorProportionSquare/ColorProportionSquare'

type Props = {
  selectedHex: string
}

const EditColorSection = ({ selectedHex }: Props) => {
  const { onClose, openModal } = useMixColorModalStore()
  const [addRawColor, setAddRawColor] = useState<RawColorFragment | null>(null)
  const [colorProportions, setColorProportions] = useState<
    ColorProportionInput[]
  >([])

  const { data: mixedColors } = useMixedColorsQuery()

  useEffect(() => {
    if (!mixedColors) return

    const mixedColor = mixedColors.find((c) => c.color === selectedHex)

    if (!mixedColor) return

    setColorProportions(
      mixedColor.colorProportions?.map((c) => ({
        ...c,
        mixedColorId: mixedColor.id,
      })) ?? []
    )
  }, [selectedHex])

  const currentMix = useMemo(
    () => mixedColors?.find((c) => c.color === selectedHex),
    [selectedHex, mixedColors]
  )

  const { mutate: submitSave } = useSaveMixedColorMutation()
  const { mutate: submitDelete } = useDeleteMixedColorMutation()

  const [showSavedMessage, setShowSavedMessage] = useState(false)
  useEffect(() => {
    if (showSavedMessage) {
      setTimeout(() => {
        setShowSavedMessage(false)
      }, 2000)
    }
  }, [showSavedMessage])

  return (
    <div>
      <FlexCol gap={16}>
        <FlexVCenter
          style={{
            justifyContent: 'space-between',
            backgroundColor: selectedHex,
            color: hexIsLight(selectedHex) ? 'black' : 'white',
            padding: '8px 16px',
            borderRadius: '4px',
          }}
        >
          <Text>
            {selectedHex} ({getColorNameFromHex(selectedHex)})
          </Text>
          {currentMix && (
            <ActionIcon
              onClick={() => {
                if (confirm('Delete?')) {
                  submitDelete(currentMix.id, {
                    onSuccess: () => {
                      onClose()
                    },
                  })
                }
              }}
            >
              <MdDelete color={hexIsLight(selectedHex) ? 'black' : 'white'} />
            </ActionIcon>
          )}
        </FlexVCenter>

        <FlexCol>
          <RawColorSelector
            value={addRawColor}
            filterOutIds={colorProportions.map((c) => c.rawColorId)}
            onChange={async (value) => {
              setAddRawColor(value)

              const input = new MyColorProportionInput()
              input.rawColorId = value.id
              input.proportion = 1

              const updatedProportions = pushOrReplace(
                colorProportions,
                input,
                'rawColorId'
              )
              setColorProportions(updatedProportions)
            }}
          />

          <FlexCol mt={16} gap={8}>
            {colorProportions.map((p) => (
              <ColorProportionOption
                key={p.id}
                colorProportion={p}
                onRemove={() => {
                  const updatedProportions = colorProportions.filter(
                    (c) => c.rawColorId !== p.rawColorId
                  )
                  setColorProportions(updatedProportions)
                }}
                onChange={(colorProportion) => {
                  const updatedProportions = pushOrReplace(
                    colorProportions,
                    colorProportion,
                    'rawColorId'
                  )
                  setColorProportions(updatedProportions)
                }}
              />
            ))}
            <FlexVCenter justify={'center'} mt={8}>
              <ColorProportionSquare colorProportions={colorProportions} />
            </FlexVCenter>
          </FlexCol>
        </FlexCol>
      </FlexCol>

      <FlexVCenter gap={16}>
        <Button
          disabled={showSavedMessage}
          fullWidth
          mt={24}
          onClick={() => {
            const input = new MyMixedColorInput()
            input.color = selectedHex
            input.colorProportions = colorProportions
            input.id = currentMix?.id ?? null
            submitSave(input, {
              onSuccess: () => {
                setShowSavedMessage(true)
              },
            })
          }}
        >
          {showSavedMessage ? 'Saved!' : 'Save'}
        </Button>
        <Button
          fullWidth
          mt={24}
          onClick={() => {
            const input = new MyMixedColorInput()
            input.color = selectedHex
            input.colorProportions = colorProportions
            input.id = currentMix?.id ?? null
            submitSave(input, {
              onSuccess: () => {
                onClose()
              },
            })
          }}
          variant="outline"
        >
          Save and close
        </Button>
      </FlexVCenter>
    </div>
  )
}

export default EditColorSection
