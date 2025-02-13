import { Box, Grid } from '@mantine/core'
import { LastExpensesSection } from '../../../monerate-page/ExpensesContent/LastExpensesSection/LastExpensesSection'
import RecurrentExpensesSection from '../../../monerate-page/ExpensesContent/RecurrentExpensesSection/RecurrentExpensesSection'
import WishlistSection from '../../../monerate-page/WishlistItems/WishlistSection'
import SalarySection from './SalarySection/SalarySection'
import SavingsSection from './SavingsSection/SavingsSection'

type Props = {}

const OthersContent = (props: Props) => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <RecurrentExpensesSection />
        <LastExpensesSection />
      </Grid.Col>
      <Grid.Col span={6}>
        <WishlistSection />
      </Grid.Col>

      <Grid.Col span={3}>
        <SavingsSection />
        <Box mt={32} />
        <SalarySection />
      </Grid.Col>
    </Grid>
  )
}

export default OthersContent
