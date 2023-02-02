import { Tabs, Title } from '@mantine/core'
import useRouterStore, {
  PageType,
} from '../../../../../hooks/zustand/useRouterStore'

type Props = {
  test?: string
}

const MyHeaderTabs = (props: Props) => {
  const { currentPage, setCurrentPage } = useRouterStore()

  return (
    <Tabs
      value={currentPage}
      onTabChange={(value) => setCurrentPage(value as PageType)}
    >
      <Tabs.List>
        <Tabs.Tab
          value="monerate"
          sx={{
            paddingBottom: 12,
          }}
        >
          <Title order={4}>Monerate</Title>
        </Tabs.Tab>
        <Tabs.Tab
          value="recipes"
          sx={{
            paddingBottom: 12,
          }}
        >
          <Title order={4}>Recipes</Title>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}

export default MyHeaderTabs
