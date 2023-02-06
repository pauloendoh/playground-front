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
import MyPaper from '../../_common/overrides/MyPaper'

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
    if (entry?.isIntersecting && hasNextPage && data?.pages?.length) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, hasNextPage, data])

  return (
    <Box>
      <Button
        onClick={() => {
          openModal(new MyExpenseInput())
        }}
      >
        + Add Expense
      </Button>
      <MyPaper mt={16}>
        <Flex direction="column">
          {flattedData?.map((expense) => (
            <Button
              key={expense.id}
              onClick={() => {
                openModal({
                  ...expense!,
                  categoryIds: expense?.categories?.map(
                    (category) => category?.id
                  ),
                })
              }}
              color="dark"
              styles={{
                label: {
                  width: '100%',
                  justifyContent: 'space-between',
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
      </MyPaper>
    </Box>
  )
}

export default ExpensesContent
