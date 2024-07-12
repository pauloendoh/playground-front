import { AppShell } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'
import { urls } from '../../../utils/urls'
import IssuesContent from '../../issues-page/IssuesContent/IssuesContent'
import ExpensesContent from '../../monerate-page/ExpensesContent/ExpensesContent'
import RecipesContent from '../../recipes-page/RecipesContent/RecipesContent'
import ColorMixerPage from '../ColorMixerPage/ColorMixerPage'
import MonerateContent from '../MonerateContent/MonerateContent'
import OthersContent from '../MonerateContent/OthersContent/OthersContent'
import NhPage from '../NhPage/NhPage'
import MyHeader from './MyHeader/MyHeader'

type Props = {
  test?: string
}

const HomePage = (props: Props) => {
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
      <Routes>
        <Route path="/recipes" element={<RecipesContent />} />
        <Route path="/issues" element={<IssuesContent />} />
        <Route path="/color-mixer" element={<ColorMixerPage />} />
        <Route path="/nh" element={<NhPage />} />
        <Route element={<MonerateContent />}>
          <Route path={urls.pages.monerateOthers} element={<OthersContent />} />
          <Route index element={<OthersContent />} />

          <Route
            path={urls.pages.monerateExpenses}
            element={<ExpensesContent />}
          />
        </Route>
      </Routes>
    </AppShell>
  )
}

export default HomePage
