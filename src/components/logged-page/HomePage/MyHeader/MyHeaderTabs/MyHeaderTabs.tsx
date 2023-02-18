import { Tabs, Title } from '@mantine/core'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

    return 'monerate'
  }, [location])

  return (
    <Tabs
      value={tabValue}
      // onTabChange={(value) => setCurrentPage(value as PageType)}
    >
      <Tabs.List>
        {navbarTabOptions.map((tab) => (
          <Link to={tab.to} style={{ textDecoration: 'unset' }}>
            <Tabs.Tab
              value={tab.tabValue}
              sx={{
                paddingBottom: 12,
              }}
            >
              <Title order={4}>{tab.label}</Title>
            </Tabs.Tab>
          </Link>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default MyHeaderTabs
