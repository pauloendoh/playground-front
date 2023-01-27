import {
  Box,
  Button,
  Center,
  Flex,
  Loader,
  useMantineTheme,
} from '@mantine/core'
import { useIntersection } from '@mantine/hooks'
import { useEffect, useMemo, useRef } from 'react'
import { useExpensesQuery } from '../../../hooks/react-query/monerate/expense/useExpensesQuery'
import useExpenseModalStore from '../../../hooks/zustand/modals/useExpenseModalStore'
import { MyExpenseInput } from '../../../types/domains/monerate/expense/MyExpenseInput'

type Props = {
  test?: string
}

const ExpensesContent = (props: Props) => {
  const { openModal } = useExpenseModalStore()
  const { fetchNextPage, data, hasNextPage } = useExpensesQuery()

  const theme = useMantineTheme()

  const flattedData = useMemo(
    () => data?.pages?.flatMap((page) => page) || [],
    [data]
  )

  const containerRef = useRef()

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, hasNextPage])

  return (
    <Box>
      Expenses
      <Box>
        <Button
          onClick={() => {
            openModal(new MyExpenseInput())
          }}
        >
          + Add Expense
        </Button>
      </Box>
      <Flex direction="column" mt={16}>
        {flattedData?.map((expense) => (
          <Button
            key={expense?.id}
            onClick={() => {
              openModal({
                ...expense!,
                categoryIds: expense?.categories?.map(
                  (category) => category?.id
                ),
              })
            }}
            styles={{
              label: {
                width: '100%',
                justifyContent: 'space-between',
                color: theme.colors.dark,
              },
            }}
            variant="subtle"
          >
            {expense?.name} - {expense?.value}
          </Button>
        ))}
        {hasNextPage && (
          <Center ref={ref} sx={{ height: 32 }}>
            <Loader />
          </Center>
        )}
      </Flex>
    </Box>
  )
}

export default ExpensesContent
