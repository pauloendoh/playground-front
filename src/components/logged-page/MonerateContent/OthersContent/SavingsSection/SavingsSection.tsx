import { Button, Flex, ScrollArea, Text } from '@mantine/core'
import { useMemo } from 'react'
import { useSavingsQuery } from '../../../../../hooks/react-query/monerate/saving/useSavingsQuery'
import useAverageMonthlyGrowthModalStore from '../../../../../hooks/zustand/modals/useAverageMonthlyGrowthModalStore'
import useSavingModalStore from '../../../../../hooks/zustand/modals/useSavingModalStore'
import { MySavingValidInput } from '../../../../../types/domains/monerate/saving/MySavingValidInput'
import FlexVCenter from '../../../../_common/flex/FlexVCenter'
import MyPaper from '../../../../_common/overrides/MyPaper'
import SavingItem from './SavingItem/SavingItem'
import { useAverageMonthlyGrowth } from './useAverageMonthlyGrowth/useAverageMonthlyGrowth'

type Props = {}

const SavingsSection = (props: Props) => {
  const { openModal } = useSavingModalStore()
  const { data: savings } = useSavingsQuery()

  const sortedSavings = useMemo(
    () => savings?.sort((a, b) => b.date.localeCompare(a.date)) || [],
    [savings]
  )

  const { openModal: openAverageMonthlyGrowthModal } =
    useAverageMonthlyGrowthModalStore()

  const averageMonthlyGrowth = useAverageMonthlyGrowth()

  return (
    <MyPaper>
      <Button
        fullWidth
        onClick={() => {
          openModal(new MySavingValidInput())
        }}
        color="dark"
      >
        + Add Saving
      </Button>
      <ScrollArea mt={24} sx={{ height: 'calc(100vh - 600px)' }} type="auto">
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

      <FlexVCenter justify={'space-between'} mt={16}>
        <FlexVCenter gap={4}>
          <Text>+ R$ {averageMonthlyGrowth.toFixed(0)} per month</Text>
        </FlexVCenter>

        <Button
          component="span"
          variant="default"
          onClick={() => {
            openAverageMonthlyGrowthModal()
          }}
        >
          Edit
        </Button>
      </FlexVCenter>
    </MyPaper>
  )
}

export default SavingsSection
