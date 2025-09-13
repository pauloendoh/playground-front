import { Text, useMantineTheme } from '@mantine/core'
import { upToNDecimals } from 'endoh-utils'
import { Duration } from 'luxon'
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
  }, [props.item.priceInThousands, lastSaving?.value])

  const monthlyGrowth = useAverageMonthlyGrowth()

  const estimatedTimeLabel = useMemo(() => {
    if (!monthlyGrowth) return null

    const previousItems = props.allItems.filter(
      (item) => item.priceInThousands < props.item.priceInThousands,
    )

    const sumPreviousPrices = previousItems.reduce((sum, curr) => {
      const price = Number(curr.price)
      return sum + price
    }, 0)

    const total =
      sumPreviousPrices +
      Number(props.item.priceInThousands) * 1000 -
      Number(lastSaving?.value)

    if (total <= 0) {
      return null
    }

    const months = Math.ceil(total / monthlyGrowth) //  / 175 = 132

    const duration = Duration.fromObject({ months }).shiftTo('year', 'month')
    if (duration.as('months') < 0) {
      return null
    }

    return duration.toHuman({
      showZeros: false,
    })
  }, [monthlyGrowth, props.item.priceInThousands, lastSaving, props.allItems])

  return (
    <tr onClick={() => props.onClick()}>
      <td
        style={{
          maxWidth: 280,
        }}
      >
        <div
          style={{
            display: 'none',
          }}
        >
          {JSON.stringify({
            monthlyGrowth,
            priceInThousands: props.item.priceInThousands,
            lastSavingValue: lastSaving?.value,
          })}
        </div>
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

      <td>
        <Text>{estimatedTimeLabel}</Text>
      </td>
    </tr>
  )
}

export default WishlistItemTableRow
