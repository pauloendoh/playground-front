import { Box, Button, Divider, Modal, Text, Title } from '@mantine/core'
import { useMemo } from 'react'
import { MdClose } from 'react-icons/md'
import { useMixedColorsQuery } from '../../../../hooks/react-query/colors/mixed-color/useMixedColorsQuery'
import useMixColorModalStore from '../../../../hooks/zustand/modals/useMixColorModalStore'
import FlexVCenter from '../../../_common/flex/FlexVCenter'
import { getColorNameFromHex } from '../getColorNameFromHex/getColorNameFromHex'
import { getColorSimiliarityValue } from '../getColorSimiliarityValue'
import { hexIsLight } from '../hexIsLight/hexIsLight'
import EditColorSection from './EditColorSection/EditColorSection'

type Props = {}

const MixColorModal = (props: Props) => {
  const {
    initialValue: selectedHex,
    isOpen,
    onClose,
    openModal,
  } = useMixColorModalStore()

  const { data: mixedColors } = useMixedColorsQuery()

  const sortedMixedColors = useMemo(() => {
    if (!mixedColors) return []

    return [...mixedColors]
      .filter((c) => c.color !== selectedHex)
      .sort((a, b) => {
        // high similarity value = less imilar
        // sort by most similar
        return (
          getColorSimiliarityValue(a.color, selectedHex) -
          getColorSimiliarityValue(b.color, selectedHex)
        )
      })
      .slice(0, 10)
  }, [mixedColors, selectedHex])

  return (
    <Modal onClose={() => onClose()} opened={isOpen} title="Mixing" fullScreen>
      <Box>
        <EditColorSection selectedHex={selectedHex} />

        <Button
          leftIcon={<MdClose />}
          variant="filled"
          color="red"
          fullWidth
          mt={8}
          onClick={() => onClose()}
        >
          Close
        </Button>

        <Divider my={24} />

        {sortedMixedColors.length > 0 && (
          <Box>
            <Title order={3}>Similar colors</Title>

            {/* two column grid */}
            <Box
              mt={8}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: '8px',
                marginBottom: '8px',
              }}
            >
              {sortedMixedColors.map((c) => {
                return (
                  <FlexVCenter
                    key={c.id}
                    style={{
                      width: '100%',
                      padding: '8px 16px',
                      backgroundColor: c.color,
                      color: hexIsLight(c.color) ? 'black' : 'white',
                      borderRadius: 4,
                      fontSize: 12,
                      justifyContent: 'space-between',
                    }}
                    onClick={() => {
                      openModal(c.color)
                    }}
                  >
                    <Text>{c.color}</Text>
                    <Text>{getColorNameFromHex(c.color)}</Text>
                  </FlexVCenter>
                )
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  )
}

export default MixColorModal
