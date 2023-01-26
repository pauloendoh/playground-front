import { Box, Button } from '@mantine/core'
import { useExpensesQuery } from '../../../hooks/react-query/monerate/expense/useExpensesQuery'
import useExpenseModalStore from '../../../hooks/zustand/modals/useExpenseModalStore'
import { MyExpenseInput } from '../../../types/domains/monerate/expense/MyExpenseInput'

type Props = {
  test?: string
}

const ExpensesContent = (props: Props) => {
  const { openModal } = useExpenseModalStore()
  const { data: expenses } = useExpensesQuery()
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
      <Box>
        {expenses?.map((expense) => (
          <Button
            key={expense.id}
            onClick={() => {
              openModal(expense)
            }}
          >
            {expense.name} - {expense.value}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default ExpensesContent
