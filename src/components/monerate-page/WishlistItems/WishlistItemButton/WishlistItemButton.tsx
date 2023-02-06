import { Button, Text, Tooltip } from '@mantine/core'
import { upToNDecimals } from 'endoh-utils'
import { useMemo } from 'react'
import { WishlistItemFragment } from '../../../../graphql/generated/graphql'
import { useLastSavingQueryUtils } from '../../../../hooks/react-query/monerate/saving/useLastSavingQueryUtils'

type Props = {
  item: WishlistItemFragment
  onClick: () => void
}

const WishlistItemButton = (props: Props) => {
  const lastSaving = useLastSavingQueryUtils()

  const formatToCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const valueToReach = useMemo(() => {
    if (!lastSaving) return 0
    const diffValue =
      Number(props.item.priceInThousands) * 1000 - Number(lastSaving.value)

    return diffValue
  }, [lastSaving, props.item])

  const tooltipLabel = useMemo(() => {
    if (valueToReach <= 0) return 'Can buy! :D'
    return `You need to save ${formatToCurrency(valueToReach)} to buy this item`
  }, [valueToReach])

  return (
    <Button
      key={props.item.id}
      onClick={props.onClick}
      styles={{
        label: {
          justifyContent: 'space-between',
          width: '100%',
        },
      }}
      variant="subtle"
    >
      <Text>{props.item.itemName}</Text>
      <Tooltip label={tooltipLabel} withArrow>
        <Text
          sx={(theme) => ({
            color:
              valueToReach > 0 ? theme.colors.red[5] : theme.colors.green[5],
          })}
        >
          R$ {upToNDecimals(Number(props.item.priceInThousands), 1)} K
        </Text>
      </Tooltip>
    </Button>
  )
}

export default WishlistItemButton
