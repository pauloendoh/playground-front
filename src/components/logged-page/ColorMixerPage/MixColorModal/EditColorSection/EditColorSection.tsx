import { ActionIcon, Button, Text } from '@mantine/core'
import { pushOrReplace } from 'endoh-utils'
import { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import {
  ColorProportionInput,
  RawColorFragment,
} from '../../../../../graphql/generated/graphql'
import { useMixedColorsQuery } from '../../../../../hooks/react-query/colors/mixed-color/useMixedColorsQuery'
import { useSaveMixedColorMutation } from '../../../../../hooks/react-query/colors/mixed-color/useSaveMixedColorsMutation'
import { MyColorProportionInput } from '../../../../../types/domains/colors/mixed-color/MyColorProportionInput'
import { MyMixedColorInput } from '../../../../../types/domains/colors/mixed-color/MyMixedColorInput'
import FlexCol from '../../../../_common/flex/FlexCol'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'
import { getColorNameFromHex } from '../../getColorNameFromHex/getColorNameFromHex'
import { hexIsLight } from '../../hexIsLight/hexIsLight'
import ColorProportionOption from '../ColorProportionOption/ColorProportionOption'
import RawColorSelector from '../RawColorSelector/RawColorSelector'

type Props = {
  selectedHex: string
}

const EditColorSection = ({ selectedHex }: Props) => {
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
      mixedColor.colorProportions.map((c) => ({
        ...c,
        mixedColorId: mixedColor.id,
      }))
    )
  }, [selectedHex])

  const { mutate } = useSaveMixedColorMutation()

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
          <ActionIcon
            onClick={() => {
              if (confirm('Delete?')) {
                alert('delete')
              }
            }}
          >
            <MdDelete color={hexIsLight(selectedHex) ? 'black' : 'white'} />
          </ActionIcon>
        </FlexVCenter>

        <FlexCol>
          <RawColorSelector
            value={addRawColor}
            filterOutIds={colorProportions.map((c) => c.rawColorId)}
            onChange={async (value) => {
              setAddRawColor(value)

              const input = new MyColorProportionInput()
              input.rawColorId = value.id
              input.proportion = '1'

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
          </FlexCol>
        </FlexCol>
      </FlexCol>
      <Button
        mt={24}
        onClick={() => {
          const input = new MyMixedColorInput()
          input.color = selectedHex
          input.colorProportions = colorProportions
          mutate(input)
        }}
      >
        Save
      </Button>
    </div>
  )
}

export default EditColorSection
