import { Flex, Grid, Title } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import useExpenseFilterStore from '../../../../hooks/zustand/useExpenseFilterStore'
import MyTextInput from '../../../_common/inputs/MyTextInput'
import MyPaper from '../../../_common/overrides/MyPaper'

type Props = {}

const ExpenseFilters = (props: Props) => {
  const { filter, setExpensesByText } = useExpenseFilterStore()
  const [debouncedFilter] = useDebouncedValue(filter, 300)

  return (
    <MyPaper>
      <Flex>
        <Title order={4}>Expense Filters</Title>
      </Flex>
      <Grid sx={{ marginTop: 16 }}>
        <Grid.Col span={3}>
          <MyTextInput
            label="By Text"
            value={filter.expensesByText}
            onChange={(e) => setExpensesByText(e.target.value)}
          />
        </Grid.Col>
      </Grid>
    </MyPaper>
  )
}

export default ExpenseFilters
