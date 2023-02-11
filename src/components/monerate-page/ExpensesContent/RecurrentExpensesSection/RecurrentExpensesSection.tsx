import { Box, Button, Text, Title } from '@mantine/core'
import { useMemo } from 'react'
import { useRecurrentExpensesQuery } from '../../../../hooks/react-query/monerate/expense/useRecurrentExpensesQuery'
import useExpenseModalStore from '../../../../hooks/zustand/modals/useExpenseModalStore'
import FlexCol from '../../../_common/flex/FlexCol'
import FlexVCenter from '../../../_common/flex/FlexVCenter'

type Props = {}

const RecurrentExpensesSection = (props: Props) => {
  const { data } = useRecurrentExpensesQuery()

  const sortedData = useMemo(() => {
    if (!data) return []

    return data.sort((a, b) => {
      const aTimes = Number(a.timesPerMonth)
      const bTimes = Number(b.timesPerMonth)
      const aTotalValue = Number(a.value) * aTimes
      const bTotalValue = Number(b.value) * bTimes

      return bTotalValue - aTotalValue
    })
  }, [data])

  const total = useMemo(() => {
    if (!sortedData) return 0

    return sortedData.reduce((acc, curr) => {
      const times = Number(curr.timesPerMonth)
      const value = Number(curr.value)

      return acc + value * times
    }, 0)
  }, [sortedData])

  const { openModal } = useExpenseModalStore()

  return (
    <Box>
      <Title>Recurrent Expenses</Title>
      <Text>
        Total per month:{' '}
        {
          // format to R$
          total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        }
      </Text>

      <FlexCol mt={16} gap={8}>
        {sortedData?.map((expense) => (
          <Button
            variant="subtle"
            color="red"
            sx={{ height: 'unset' }}
            styles={{
              label: {
                whiteSpace: 'unset',
                padding: 4,
                width: '100%',
              },
            }}
            onClick={() => {
              openModal({
                ...expense!,
                categoryIds: expense?.categories?.map(
                  (category) => category?.id
                ),
              })
            }}
          >
            <FlexVCenter
              key={expense.id}
              gap={16}
              justify="space-between"
              sx={{ width: '100%' }}
            >
              <Text>{expense.name}</Text>
              <Text>
                {(
                  Number(expense.value) * Number(expense.timesPerMonth)
                ).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
            </FlexVCenter>
          </Button>
        ))}
      </FlexCol>
    </Box>
  )
}

export default RecurrentExpensesSection
