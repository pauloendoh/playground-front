import { Box } from '@mantine/core'
import RecipesTable from './RecipesTable/RecipesTable'

type Props = {
  test?: string
}

const RecipesContent = (props: Props) => {
  return (
    <>
      Recipes :D
      <Box mt={16} />
      <RecipesTable />
    </>
  )
}

export default RecipesContent
