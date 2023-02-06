import { Box } from '@mantine/core'
import { Outlet, useLocation } from 'react-router-dom'
import MonerateSubtabs from './MonerateSubtabs/MonerateSubtabs'

type Props = {
  test?: string
}

const MonerateContent = (props: Props) => {
  const location = useLocation()
  return (
    <Box>
      <MonerateSubtabs />

      <Box mt={24} />
      <Outlet />
    </Box>
  )
}

export default MonerateContent
