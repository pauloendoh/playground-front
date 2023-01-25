import { Button, Flex, Header, Title } from '@mantine/core'
import { useLogout } from '../../../../hooks/domains/auth/useLogout'
import MyHeaderTabs from './MyHeaderTabs/MyHeaderTabs'

type Props = {
  test?: string
}

const MyHeader = (props: Props) => {
  const logout = useLogout()

  return (
    <Header height={60} p="xs">
      <Flex justify="space-between">
        <Title>:D</Title>

        <MyHeaderTabs />

        <Button
          onClick={() => {
            logout()
          }}
        >
          Logout
        </Button>
      </Flex>
    </Header>
  )
}

export default MyHeader
