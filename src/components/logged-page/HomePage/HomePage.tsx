import { AppShell, Box } from '@mantine/core'
import useRouterStore from '../../../hooks/zustand/useRouterStore'
import RecipesContent from '../../recipes-page/RecipesContent/RecipesContent'
import MonerateContent from '../MonerateContent/MonerateContent'
import MyHeader from './MyHeader/MyHeader'

type Props = {
  test?: string
}

const HomePage = (props: Props) => {
  const { currentPage } = useRouterStore()
  return (
    <AppShell
      padding="md"
      header={<MyHeader />}
      navbar={currentPage === 'recipes' ? <></> : <></>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Box>
        {currentPage === 'recipes' && <RecipesContent />}
        {currentPage === 'monerate' && <MonerateContent />}
      </Box>
    </AppShell>
  )
}

export default HomePage
