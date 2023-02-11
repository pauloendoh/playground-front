import { Box, Flex } from '@mantine/core'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import MonerateSubtabs from './MonerateSubtabs/MonerateSubtabs'

type Props = {
  test?: string
}

const MonerateContent = (props: Props) => {
  const location = useLocation()
  useEffect(() => {
    document.title = 'Monerate'
  }, [])

  return (
    <Box>
      <Flex justify={'center'}>
        <MonerateSubtabs />
      </Flex>

      <Box mt={24} />
      <Outlet />
    </Box>
  )
}

export default MonerateContent
