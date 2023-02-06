import { Button, Text } from '@mantine/core'
import { useMemo } from 'react'
import { format } from 'timeago.js'
import { CurrentSavingFragment } from '../../../../../../graphql/generated/graphql'
import FlexVCenter from '../../../../../_common/flex/FlexVCenter'

type Props = {
  saving: CurrentSavingFragment
  onClick: () => void
  previousSaving?: CurrentSavingFragment
}

const SavingItem = ({ saving, ...props }: Props) => {
  const diffValue = useMemo(() => {
    if (!props.previousSaving) return 0
    return Number(saving.value) - Number(props.previousSaving.value)
  }, [saving, props.previousSaving])

  return (
    <Button
      key={saving.id}
      variant="subtle"
      onClick={props.onClick}
      styles={{
        label: {
          width: '100%',
          justifyContent: 'space-between',
        },
      }}
    >
      <FlexVCenter gap={24}>
        {Number(saving.value).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}

        {diffValue > 0 && <Text color="green">+{diffValue}</Text>}
        {diffValue < 0 && <Text color="red">{diffValue}</Text>}
      </FlexVCenter>

      <Text>{format(saving.date)}</Text>
    </Button>
  )
}

export default SavingItem
