import { Box, Container, Flex } from '@mantine/core'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import MonerateSubtabs from './MonerateSubtabs/MonerateSubtabs'

type Props = {
  test?: string
}

const MonerateContent = (props: Props) => {
  useEffect(() => {
    document.title = 'Monerate'
  }, [])

  return (
    <Container size="xl">
      <Flex justify={'center'}>
        <MonerateSubtabs />
      </Flex>

      <Box mt={24} />
      <Outlet />
    </Container>
  )
}

export default MonerateContent
