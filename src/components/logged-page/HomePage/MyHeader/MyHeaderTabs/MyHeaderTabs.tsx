import { Tabs, Text, Title } from '@mantine/core'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMyMediaQuery } from '../../../../../hooks/useMyMediaQuery'
import { navbarTabOptions } from './navbarTabOptions/navbarTabOptions'

type Props = {
  test?: string
}

const MyHeaderTabs = (props: Props) => {
  const location = useLocation()
  const tabValue = useMemo(() => {
    if (location.pathname.startsWith('/recipes')) {
      return 'recipes'
    }
    if (location.pathname.startsWith('/issues')) {
      return 'issues'
    }

    if (location.pathname.startsWith('/color-mixer')) {
      return 'color-mixer'
    }

    if (location.pathname.startsWith('/nh')) {
      return 'nh'
    }

    return 'monerate'
  }, [location])

  const { isMobile } = useMyMediaQuery()

  return (
    <Tabs
      value={tabValue}
      styles={{
        root: {
          position: 'relative',
          top: 5,
        },
      }}
      // onTabChange={(value) => setCurrentPage(value as PageType)}
    >
      <Tabs.List>
        {navbarTabOptions.map((tab) => (
          <Link to={tab.to} style={{ textDecoration: 'unset' }}>
            <Tabs.Tab value={tab.tabValue}>
              {isMobile ? (
                <Text>{tab.label}</Text>
              ) : (
                <Title order={4}>{tab.label}</Title>
              )}
            </Tabs.Tab>
          </Link>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default MyHeaderTabs
