import { Tabs, Title } from '@mantine/core'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useRouterStore from '../../../../../hooks/zustand/useRouterStore'

type Props = {
  test?: string
}

const MyHeaderTabs = (props: Props) => {
  const { currentPage, setCurrentPage } = useRouterStore()
  const location = useLocation()
  const tabValue = useMemo(() => {
    if (location.pathname === '/') {
      return 'monerate'
    }
    if (location.pathname === '/recipes') {
      return 'recipes'
    }
  }, [location])

  return (
    <Tabs
      value={tabValue}
      // onTabChange={(value) => setCurrentPage(value as PageType)}
    >
      <Tabs.List>
        <Link to={'/'} style={{ textDecoration: 'unset' }}>
          <Tabs.Tab
            value="monerate"
            sx={{
              paddingBottom: 12,
            }}
          >
            <Title order={4}>Monerate</Title>
          </Tabs.Tab>
        </Link>

        <Link to={'/recipes'} style={{ textDecoration: 'unset' }}>
          <Tabs.Tab
            value="recipes"
            sx={{
              paddingBottom: 12,
            }}
          >
            <Title order={4}>Recipes</Title>
          </Tabs.Tab>
        </Link>
      </Tabs.List>
    </Tabs>
  )
}

export default MyHeaderTabs
