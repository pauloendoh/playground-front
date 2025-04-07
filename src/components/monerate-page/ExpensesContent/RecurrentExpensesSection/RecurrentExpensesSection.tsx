import { Box, ScrollArea, Title, useMantineTheme } from '@mantine/core'
import { useMemo } from 'react'
import { useRecurrentExpensesQuery } from '../../../../hooks/react-query/monerate/expense/useRecurrentExpensesQuery'
import useExpenseModalStore from '../../../../hooks/zustand/modals/useExpenseModalStore'
import FlexCol from '../../../_common/flex/FlexCol'
import MyPaper from '../../../_common/overrides/MyPaper'
import { Span } from '../../../_common/text/Span'
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton'
import { ExpenseButtonItem } from './ExpenseButtonItem/ExpenseButtonItem'

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
  const theme = useMantineTheme()

  return (
    <MyPaper
      sx={{
        padding: 0,
      }}
    >
      <Box p={16}>
        <AddExpenseButton />

        <FlexCol gap={2}>
          <Title mt={16} order={4}>
            Recurrent Expenses
          </Title>

          <Span>
            Per month ={' '}
            <Span color={theme.colors.red[6]} weight={500}>
              {
                // format to R$
                total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            </Span>
          </Span>
        </FlexCol>
      </Box>

      <ScrollArea.Autosize
        sx={{ maxHeight: 'calc(100vh - 388px)' }}
        type="auto"
      >
        <FlexCol>
          {sortedData?.map((expense) => (
            <ExpenseButtonItem
              expense={expense}
              key={expense.id}
              type="recurrent"
            />
          ))}
        </FlexCol>
      </ScrollArea.Autosize>
    </MyPaper>
  )
}

export default RecurrentExpensesSection
