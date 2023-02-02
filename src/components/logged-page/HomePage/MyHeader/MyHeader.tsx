import { IconMoonStars, IconSun } from '@tabler/icons-react'

import {
  ActionIcon,
  Button,
  Flex,
  Header,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import { useLogout } from '../../../../hooks/domains/auth/useLogout'
import FlexVCenter from '../../../_common/flex/FlexVCenter'
import MyHeaderTabs from './MyHeaderTabs/MyHeaderTabs'

type Props = {
  test?: string
}

const MyHeader = (props: Props) => {
  const logout = useLogout()

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Header height={60} p="xs">
      <Flex justify="space-between">
        <Title>:D</Title>

        <MyHeaderTabs />

        <FlexVCenter gap={16}>
          <ActionIcon
            variant="outline"
            size="lg"
            color="blue"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>

          <Button
            onClick={() => {
              logout()
            }}
          >
            Logout
          </Button>
        </FlexVCenter>
      </Flex>
    </Header>
  )
}

export default MyHeader
