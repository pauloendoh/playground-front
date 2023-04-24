import { Modal, Radio, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import { useSavingsQuery } from '../../../../hooks/react-query/monerate/saving/useSavingsQuery'
import { useSelectSavingAsAverageMonthlyGrowthMutation } from '../../../../hooks/react-query/monerate/saving/useSelectSavingAsAverageMonthlyGrowthMutation'
import { MyIssueInput } from '../../../../types/domains/monerate/issue/MyIssueInput'
import FlexCol from '../../flex/FlexCol'
import FlexVCenter from '../../flex/FlexVCenter'
import SaveCancelButtons from '../../inputs/SaveCancelButtons'

type Props = {
  isOpen: boolean
  initialValue?: MyIssueInput
  onClose: () => void
}

export default function AverageMonthlyGrowthModal(props: Props) {
  const savings = useSavingsQuery()
  const [selectedSavingId, setSelectedSavingId] = useState<string | null>(null)

  useEffect(() => {
    if (!savings) return
    const selected = savings.data?.find(
      (saving) => saving.id === selectedSavingId
    )
    setSelectedSavingId(selected?.id || null)
  }, [savings])

  const { mutate } = useSelectSavingAsAverageMonthlyGrowthMutation()

  return (
    <>
      <Modal
        opened={props.isOpen}
        onClose={() => props.onClose()}
        size="xs"
        styles={{
          title: {
            width: '100%',
          },
        }}
        title={'Average monthly growth'}
      >
        <FlexCol gap={8}>
          {savings?.data?.map((saving) => (
            <FlexVCenter key={saving.id} justify={'space-between'}>
              <FlexVCenter gap={4}>
                <Radio
                  checked={saving.id === selectedSavingId}
                  onChange={() => setSelectedSavingId(saving.id)}
                  size="xs"
                />
                <div>
                  {Number(saving.value).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              </FlexVCenter>

              <Text>{format(saving.date)}</Text>
            </FlexVCenter>
          ))}
        </FlexCol>

        <FlexVCenter mt={32}>
          <SaveCancelButtons
            onSave={() => {
              if (!selectedSavingId) return
              mutate(selectedSavingId, {
                onSuccess: () => props.onClose(),
              })
            }}
            onCancel={() => props.onClose()}
          />
        </FlexVCenter>
      </Modal>
    </>
  )
}
