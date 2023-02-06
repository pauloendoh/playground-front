import { AppShell, Container } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import useRouterStore from '../../../hooks/zustand/useRouterStore'
import { urls } from '../../../utils/urls'
import ExpensesContent from '../../monerate-page/ExpensesContent/ExpensesContent'
import RecipesContent from '../../recipes-page/RecipesContent/RecipesContent'
import MonerateContent from '../MonerateContent/MonerateContent'
import OthersContent from '../MonerateContent/OthersContent/OthersContent'
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
      navbar={undefined}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <Routes>
          <Route path="/recipes" element={<RecipesContent />} />
          <Route element={<MonerateContent />}>
            <Route
              path={urls.pages.monerateOthers}
              element={<OthersContent />}
            />
            <Route index element={<ExpensesContent />} />
          </Route>
        </Routes>
      </Container>
    </AppShell>
  )
}

export default HomePage
