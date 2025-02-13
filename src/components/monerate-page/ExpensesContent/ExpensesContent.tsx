import { Box, Grid } from '@mantine/core'
import { LastExpensesSection } from './LastExpensesSection/LastExpensesSection'
import RecurrentExpensesSection from './RecurrentExpensesSection/RecurrentExpensesSection'

type Props = {
  test?: string
}

const ExpensesContent = (props: Props) => {
  return (
    <Box>
      <Grid>
        <Grid.Col span={6}>
          <Box mt={16} />

          <LastExpensesSection />
        </Grid.Col>
        <Grid.Col span={6}>
          <RecurrentExpensesSection />
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default ExpensesContent
