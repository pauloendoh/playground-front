import { Box, Grid } from '@mantine/core'
import FlexCol from '../../../_common/flex/FlexCol'
import AddExpenseButton from '../../../monerate-page/ExpensesContent/AddExpenseButton/AddExpenseButton'
import RecurrentExpensesSection from '../../../monerate-page/ExpensesContent/RecurrentExpensesSection/RecurrentExpensesSection'
import WishlistItems from '../../../monerate-page/WishlistItems/WishlistItems'
import SalarySection from './SalarySection/SalarySection'
import SavingsSection from './SavingsSection/SavingsSection'

type Props = {}

const OthersContent = (props: Props) => {
  return (
    <Grid>
      <Grid.Col span={5}>
        <SavingsSection />
        <Box mt={32} />
        <SalarySection />

        <FlexCol mt={32} gap={16} pb={40}>
          <AddExpenseButton />

          <RecurrentExpensesSection />
        </FlexCol>
      </Grid.Col>

      <Grid.Col span={7}>
        <WishlistItems />
      </Grid.Col>
    </Grid>
  )
}

export default OthersContent
