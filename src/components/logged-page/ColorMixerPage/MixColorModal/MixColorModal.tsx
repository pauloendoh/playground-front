import { Box, Button, Divider, Modal, Text, Title } from '@mantine/core'
import { useEffect, useMemo, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useMixedColorsQuery } from '../../../../hooks/react-query/colors/mixed-color/useMixedColorsQuery'
import useMixColorModalStore from '../../../../hooks/zustand/modals/useMixColorModalStore'
import FlexVCenter from '../../../_common/flex/FlexVCenter'
import { getColorNameFromHex } from '../getColorNameFromHex/getColorNameFromHex'
import { getColorsSimilarityValue } from '../getColorsSimilarityValue'
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

  const [sortingBy, setSortingBy] = useState<'similarity' | 'lastUpdated'>(
    'similarity'
  )

  useEffect(() => {
    if (isOpen) {
      setSortingBy('similarity')
    }
  }, [isOpen])

  const sortedMixedColors = useMemo(() => {
    if (!mixedColors) return []

    let result = [...mixedColors].filter((c) => c.color !== selectedHex)

    if (sortingBy === 'similarity') {
      result = result.sort((a, b) => {
        // high similarity value = less imilar
        // sort by most similar
        return (
          getColorsSimilarityValue(a.color, selectedHex) -
          getColorsSimilarityValue(b.color, selectedHex)
        )
      })
    }

    if (sortingBy === 'lastUpdated') {
      result = result.sort((a, b) => {
        return b.updatedAt.localeCompare(a.updatedAt)
      })
    }

    return result
  }, [mixedColors, selectedHex, sortingBy])

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
            <FlexVCenter justify={'space-between'}>
              <Title order={3}>Mixed colors</Title>
              <Button
                onClick={() => {
                  setSortingBy((prev) =>
                    prev === 'similarity' ? 'lastUpdated' : 'similarity'
                  )
                }}
                variant="subtle"
              >
                Sort by:{' '}
                {sortingBy === 'similarity' ? 'Similarity' : 'Last Updated'}
              </Button>
            </FlexVCenter>

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
                    <Text>{getColorNameFromHex(c.color)} </Text>
                    {!!c.colorProportions?.length && (
                      <Text
                        sx={{
                          fontSize: 11,
                          backgroundColor: hexIsLight(c.color)
                            ? 'black'
                            : 'white',
                          color: hexIsLight(c.color) ? 'white' : 'black',
                          padding: '2px 4px',
                          borderRadius: 4,
                        }}
                      >
                        {c.colorProportions.length}
                      </Text>
                    )}
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
