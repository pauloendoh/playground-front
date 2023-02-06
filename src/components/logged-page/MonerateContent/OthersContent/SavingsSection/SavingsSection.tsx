import { Button, Flex, ScrollArea } from '@mantine/core'
import { useMemo } from 'react'
import { useSavingsQuery } from '../../../../../hooks/react-query/monerate/saving/useSavingsQuery'
import useSavingModalStore from '../../../../../hooks/zustand/modals/useSavingModalStore'
import { MySavingValidInput } from '../../../../../types/domains/monerate/saving/MySavingValidInput'
import MyPaper from '../../../../_common/overrides/MyPaper'
import SavingItem from './SavingItem/SavingItem'

type Props = {}

const SavingsSection = (props: Props) => {
  const { openModal } = useSavingModalStore()
  const { data: savings } = useSavingsQuery()

  const sortedSavings = useMemo(
    () => savings?.sort((a, b) => b.date.localeCompare(a.date)) || [],
    [savings]
  )

  return (
    <MyPaper>
      <Button
        fullWidth
        onClick={() => {
          openModal(new MySavingValidInput())
        }}
      >
        + Add Saving
      </Button>
      <ScrollArea mt={24} sx={{ height: 160 }} type="auto">
        <Flex direction="column">
          {sortedSavings?.map((saving, index) => (
            <SavingItem
              saving={saving}
              key={saving.id}
              onClick={() => openModal(saving)}
              previousSaving={sortedSavings[index + 1]}
            />
          ))}
        </Flex>
      </ScrollArea>
    </MyPaper>
  )
}

export default SavingsSection
