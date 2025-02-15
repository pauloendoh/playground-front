import { useMemo } from 'react'
import { Span } from '../../../../../_common/text/Span'
import { useMoneyPerHour } from '../../../../../logged-page/MonerateContent/OthersContent/SalarySection/useMoneyPerHour/useMoneyPerHour'

export const useValueInHoursSpan = (
  expenseValue: number,
  options?: {
    hideTildePrefix?: boolean
    overrideSufix?: string
    showMinutes?: boolean
  }
) => {
  const moneyPerHour = useMoneyPerHour()

  const sufix = useMemo(() => {
    if (options?.overrideSufix) return options.overrideSufix
    if (options?.showMinutes) return ''

    return 'h'
  }, [])

  const result = useMemo(() => {
    if (moneyPerHour === undefined) return undefined

    const hoursInNumber = expenseValue / moneyPerHour
    // eg: 50 / 40 = 1.25 -> 1h 15m

    const hoursCeil = Math.ceil(hoursInNumber)

    const hoursFloor = Math.floor(hoursInNumber)
    const minutes = (hoursInNumber - hoursFloor) * 60

    const hoursAndMinutes = (function () {
      if (hoursFloor === 0) return `${minutes.toFixed(0)}min`
      if (minutes === 0) return `${hoursFloor}h`

      return `${hoursFloor}h ${minutes.toFixed(0)}min`
    })()

    return (
      <Span title={hoursAndMinutes}>
        {options?.hideTildePrefix ? '' : '~'}
        {options?.showMinutes ? hoursAndMinutes : hoursCeil}

        {sufix}
      </Span>
    )
  }, [moneyPerHour, expenseValue, sufix])

  return result
}
