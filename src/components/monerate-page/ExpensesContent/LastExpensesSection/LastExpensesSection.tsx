import { Box, Center, Flex, Loader } from '@mantine/core'
import { useDebouncedValue, useIntersection } from '@mantine/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { useExpensesQuery } from '../../../../hooks/react-query/monerate/expense/useExpensesQuery'
import useExpenseModalStore from '../../../../hooks/zustand/modals/useExpenseModalStore'
import useExpenseFilterStore from '../../../../hooks/zustand/useExpenseFilterStore'
import MyPaper from '../../../_common/overrides/MyPaper'
import ExpenseFilters from '../ExpenseFilters/ExpenseFilters'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

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

  return (
    <MyPaper mt={16}>
      <Flex direction="column">
        <ExpenseFilters />
        <Box mt={16} />

        {flatExpenses && flatExpenses.length === 0 && 'No expenses found'}
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
  )
}
