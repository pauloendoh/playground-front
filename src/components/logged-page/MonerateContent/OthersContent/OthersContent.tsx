import { Grid } from '@mantine/core'
import WishlistItems from '../../../monerate-page/WishlistItems/WishlistItems'
import SavingsSection from './SavingsSection/SavingsSection'

type Props = {}

const OthersContent = (props: Props) => {
  return (
    <Grid>
      <Grid.Col span="auto">
        <SavingsSection />
      </Grid.Col>

      <Grid.Col span="auto">
        <WishlistItems />
      </Grid.Col>
    </Grid>
  )
}

export default OthersContent
