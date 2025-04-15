import { Text, useMantineTheme } from '@mantine/core'
import { upToNDecimals } from 'endoh-utils'
import { useMemo } from 'react'
import { WishlistItemFragment } from '../../../../graphql/generated/graphql'
import { useLastSavingQueryUtils } from '../../../../hooks/react-query/monerate/saving/useLastSavingQueryUtils'
import { useAverageMonthlyGrowth } from '../../../logged-page/MonerateContent/OthersContent/SavingsSection/useAverageMonthlyGrowth/useAverageMonthlyGrowth'

type Props = {
  item: WishlistItemFragment
  allItems: WishlistItemFragment[]
  onClick: () => void
}

const WishlistItemTableRow = (props: Props) => {
  const theme = useMantineTheme()

  const lastSaving = useLastSavingQueryUtils()

  const valueToReach = useMemo(() => {
    if (!lastSaving) return 0
    const diffValue =
      Number(props.item.priceInThousands) * 1000 - Number(lastSaving.value)

    return diffValue
  }, [lastSaving, props.item])

  const avgGrowth = useAverageMonthlyGrowth()

  const estimatedMonths = useMemo(() => {
    if (!avgGrowth) return 0

    const previousItems = props.allItems.filter(
      (item) => item.priceInThousands < props.item.priceInThousands
    )

    const sumPreviousPrices = previousItems.reduce((sum, curr) => {
      const price = Number(curr.price)
      return sum + price
    }, 0)

    const total =
      sumPreviousPrices +
      Number(props.item.priceInThousands) * 1000 -
      Number(lastSaving?.value)

    const months = Math.ceil(total / avgGrowth)
    return months
  }, [avgGrowth, props.item.priceInThousands, lastSaving, props.allItems])

  return (
    <tr onClick={() => props.onClick()}>
      <td
        style={{
          maxWidth: 280,
        }}
      >
        <Text truncate>{props.item.itemName}</Text>
      </td>
      <td>{props.item.priority}</td>
      <td
        style={{
          color: valueToReach > 0 ? theme.colors.red[5] : theme.colors.green[5],
        }}
      >
        <Text>
          R$ {upToNDecimals(Number(props.item.priceInThousands), 1)} K
        </Text>
      </td>
      <td>{props.item.price && `R$ ${props.item.price}`}</td>

      <td>{estimatedMonths > 0 && <Text>{estimatedMonths} months</Text>}</td>
    </tr>
  )
}

export default WishlistItemTableRow
