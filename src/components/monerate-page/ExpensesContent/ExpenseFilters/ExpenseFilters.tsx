import { Box, Flex, Grid, Title } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import useExpenseFilterStore from '../../../../hooks/zustand/useExpenseFilterStore'
import MyTextInput from '../../../_common/inputs/MyTextInput'

type Props = {}

const ExpenseFilters = (props: Props) => {
  const { filter, setExpensesByText } = useExpenseFilterStore()
  const [debouncedFilter] = useDebouncedValue(filter, 300)

  return (
    <Box>
      <Flex>
        <Title order={4}>Last saved expenses</Title>
      </Flex>
      <Grid sx={{ marginTop: 4 }}>
        <Grid.Col span={6}>
          <MyTextInput
            label="Filter expenses"
            value={filter.expensesByText}
            onChange={(e) => setExpensesByText(e.target.value)}
          />
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default ExpenseFilters
