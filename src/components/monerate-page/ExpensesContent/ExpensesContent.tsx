import { Box, Button, Center, Flex, Loader } from '@mantine/core'
import { useDebouncedValue, useIntersection } from '@mantine/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { useExpensesQuery } from '../../../hooks/react-query/monerate/expense/useExpensesQuery'
import useExpenseModalStore from '../../../hooks/zustand/modals/useExpenseModalStore'
import useExpenseFilterStore from '../../../hooks/zustand/useExpenseFilterStore'
import { MyExpenseInput } from '../../../types/domains/monerate/expense/MyExpenseInput'
import MyPaper from '../../_common/overrides/MyPaper'
import ExpenseFilters from './ExpenseFilters/ExpenseFilters'
import ExpenseItem from './ExpenseItem/ExpenseItem'

type Props = {
  test?: string
}

const ExpensesContent = (props: Props) => {
  const { openModal } = useExpenseModalStore()

  const filter = useExpenseFilterStore((s) => s.filter)
  const [debouncedFilter] = useDebouncedValue(filter, 300)

  const {
    fetchNextPage,
    data: pagedExpenses,
    hasNextPage,
  } = useExpensesQuery(debouncedFilter)

  const flatExpenses = useMemo(
    () => pagedExpenses?.pages?.flatMap((page) => page) || [],
    [pagedExpenses]
  )

  const containerRef = useRef()

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && pagedExpenses?.pages?.length) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, hasNextPage, pagedExpenses])

  return (
    <Box>
      <Button
        onClick={() => {
          openModal(new MyExpenseInput())
        }}
      >
        + Add Expense
      </Button>

      <Box mt={16} />
      <ExpenseFilters />

      <MyPaper mt={16}>
        <Flex direction="column">
          {flatExpenses?.map((expense) => (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              onClick={() => {
                openModal({
                  ...expense!,
                  categoryIds: expense?.categories?.map(
                    (category) => category?.id
                  ),
                })
              }}
            />
          ))}
          {hasNextPage && (
            <Center ref={ref} sx={{ height: 32 }}>
              <Loader />
            </Center>
          )}
        </Flex>
      </MyPaper>
    </Box>
  )
}

export default ExpensesContent
