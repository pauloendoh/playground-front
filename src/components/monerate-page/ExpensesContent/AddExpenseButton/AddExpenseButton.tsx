import { Button } from '@mantine/core'
import useExpenseModalStore from '../../../../hooks/zustand/modals/useExpenseModalStore'
import { MyExpenseInput } from '../../../../types/domains/monerate/expense/MyExpenseInput'

type Props = {}

const AddExpenseButton = ({ ...props }: Props) => {
  const { openModal } = useExpenseModalStore()

  return (
    <Button
      onClick={() => {
        openModal(new MyExpenseInput())
      }}
      w="100%"
    >
      + Add Expense
    </Button>
  )
}

export default AddExpenseButton
