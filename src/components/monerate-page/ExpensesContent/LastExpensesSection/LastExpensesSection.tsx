import { Box, Center, Flex, Loader, Title } from '@mantine/core'
import { useDebouncedValue, useIntersection } from '@mantine/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { useExpensesQuery } from '../../../../hooks/react-query/monerate/expense/useExpensesQuery'
import useExpenseModalStore from '../../../../hooks/zustand/modals/useExpenseModalStore'
import useExpenseFilterStore from '../../../../hooks/zustand/useExpenseFilterStore'
import MyTextInput from '../../../_common/inputs/MyTextInput'
import MyPaper from '../../../_common/overrides/MyPaper'
import { ExpenseButtonItem } from '../RecurrentExpensesSection/ExpenseButtonItem/ExpenseButtonItem'

type Props = {}

export const LastExpensesSection = ({ ...props }: Props) => {
  const filter = useExpenseFilterStore((s) => s.filter)

  const [debouncedFilter] = useDebouncedValue(filter, 300)

  const {
    fetchNextPage,
    data: pagedExpenses,
    hasNextPage,
  } = useExpensesQuery(debouncedFilter)

  const containerRef = useRef()

  const flatExpenses = useMemo(
    () => pagedExpenses?.pages?.flatMap((page) => page) || [],
    [pagedExpenses]
  )

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && pagedExpenses?.pages?.length) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, hasNextPage, pagedExpenses])

  const { openModal } = useExpenseModalStore()
  const { setExpensesByText } = useExpenseFilterStore()

  return (
    <MyPaper p={0} mt={16}>
      <Flex direction="column">
        <Box p={16}>
          <Flex>
            <Title order={4}>Last saved expenses</Title>
          </Flex>
          <MyTextInput
            w="100%"
            label="Filter expenses"
            value={filter.expensesByText}
            onChange={(e) => setExpensesByText(e.target.value)}
          />
        </Box>

        {flatExpenses && flatExpenses.length === 0 && 'No expenses found'}

        {flatExpenses?.map((expense) => (
          <ExpenseButtonItem
            expense={expense}
            key={expense.id}
            type="regular"
          />
        ))}
        {hasNextPage && (
          <Center ref={ref} sx={{ height: 32 }}>
            <Loader />
          </Center>
        )}
      </Flex>
    </MyPaper>
  )
}
