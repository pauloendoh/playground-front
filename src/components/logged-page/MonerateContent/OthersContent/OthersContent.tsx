import { Box, Grid } from '@mantine/core'
import WishlistItems from '../../../monerate-page/WishlistItems/WishlistItems'
import SalarySection from './SalarySection/SalarySection'
import SavingsSection from './SavingsSection/SavingsSection'

type Props = {}

const OthersContent = (props: Props) => {
  return (
    <Grid>
      <Grid.Col span="auto">
        <SavingsSection />
        <Box mt={32} />
        <SalarySection />
      </Grid.Col>

      <Grid.Col span="auto">
        <WishlistItems />
      </Grid.Col>
    </Grid>
  )
}

export default OthersContent
