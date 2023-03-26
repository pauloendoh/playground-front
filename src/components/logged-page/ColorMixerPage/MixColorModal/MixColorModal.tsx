import { ActionIcon, Box, Button, Center, Flex, Modal } from '@mantine/core'
import { pushOrReplace } from 'endoh-utils'
import { useEffect, useMemo, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import {
  ColorProportionInput,
  RawColorFragment,
} from '../../../../graphql/generated/graphql'
import { useMixedColorsQuery } from '../../../../hooks/react-query/colors/mixed-color/useMixedColorsQuery'
import { useSaveMixedColorMutation } from '../../../../hooks/react-query/colors/mixed-color/useSaveMixedColorsMutation'
import { MyColorProportionInput } from '../../../../types/domains/colors/mixed-color/MyColorProportionInput'
import { MyMixedColorInput } from '../../../../types/domains/colors/mixed-color/MyMixedColorInput'
import FlexCol from '../../../_common/flex/FlexCol'
import FlexVCenter from '../../../_common/flex/FlexVCenter'
import { getColorSimiliarityValue } from '../getColorSimiliarityValue'
import ColorProportionOption from './ColorProportionOption/ColorProportionOption'
import RawColorSelector from './RawColorSelector/RawColorSelector'

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

  const { mutate } = useSaveMixedColorMutation()

  const { data: mixedColors } = useMixedColorsQuery()

  const sortedMixedColors = useMemo(() => {
    if (!mixedColors) return []
    return mixedColors
      .sort((a, b) => {
        // high similarity value = less imilar
        // sort by most similar
        return (
          getColorSimiliarityValue(a.color, color) -
          getColorSimiliarityValue(b.color, color)
        )
      })
      .slice(0, 10)
  }, [mixedColors, color])

  const [addRawColor, setAddRawColor] = useState<RawColorFragment | null>(null)

  const [colorProportions, setColorProportions] = useState<
    ColorProportionInput[]
  >([])

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
          <Flex gap={16}>
            <Center
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: color,
              }}
            >
              {color}
            </Center>

            <FlexCol>
              <FlexVCenter gap={8}>
                <FlexVCenter w={160}>
                  <RawColorSelector
                    value={addRawColor}
                    onChange={async (value) => {
                      setAddRawColor(value)
                    }}
                  />
                </FlexVCenter>
                <ActionIcon
                  variant="filled"
                  size="lg"
                  onClick={() => {
                    if (addRawColor) {
                      const input = new MyColorProportionInput()
                      input.rawColorId = addRawColor.id
                      input.proportion = '1'

                      const updatedProportions = pushOrReplace(
                        colorProportions,
                        input,
                        'rawColorId'
                      )
                      setColorProportions(updatedProportions)
                    }
                  }}
                >
                  <MdAdd />
                </ActionIcon>
              </FlexVCenter>

              <FlexCol>
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
          </Flex>
          <Button
            mt={24}
            onClick={() => {
              const input = new MyMixedColorInput()
              input.color = color
              input.colorProportions = colorProportions
              mutate(input)
            }}
          >
            Save
          </Button>

          {sortedMixedColors.length > 0 && (
            <Box>
              <h3>Similar colors</h3>

              <Flex wrap={'wrap'} gap={8}>
                {sortedMixedColors.map((c) => {
                  return (
                    <Center
                      key={c.id}
                      style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: c.color,
                        textAlign: 'center',
                      }}
                      onClick={() => {
                        setColor(c.color)
                        setColorProportions(
                          c.colorProportions.map((p) => {
                            const input = new MyColorProportionInput()
                            input.rawColorId = p.rawColorId
                            input.proportion = p.proportion
                            return input
                          })
                        )
                      }}
                    >
                      {c.color}
                    </Center>
                  )
                })}
              </Flex>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  )
}

export default MixColorModal
