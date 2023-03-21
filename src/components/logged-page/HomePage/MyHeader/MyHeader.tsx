import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { ImExit } from 'react-icons/im'
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
import { useMyMediaQuery } from '../../../../hooks/useMyMediaQuery'

type Props = {
  test?: string
}

const MyHeader = (props: Props) => {
  const logout = useLogout()

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { isMobile } = useMyMediaQuery()

  return (
    <Header
      height={60}
      p="xs"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {!isMobile && <Title order={3}>Playground</Title>}

      <MyHeaderTabs />

      <FlexVCenter gap={16}>
        {!isMobile && (
          <ActionIcon
            variant="outline"
            size="lg"
            color="primary"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        )}

        <FlexVCenter>
          {isMobile ? (
            <ActionIcon
              onClick={() => {
                logout()
              }}
            >
              <ImExit />
            </ActionIcon>
          ) : (
            <Button
              onClick={() => {
                logout()
              }}
            >
              Logout
            </Button>
          )}
        </FlexVCenter>
      </FlexVCenter>
    </Header>
  )
}

export default MyHeader
