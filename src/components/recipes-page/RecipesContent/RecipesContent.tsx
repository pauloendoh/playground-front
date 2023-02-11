import { Box } from '@mantine/core'
import { useEffect } from 'react'
import RecipesTable from './RecipesTable/RecipesTable'

type Props = {
  test?: string
}

const RecipesContent = (props: Props) => {
  useEffect(() => {
    document.title = 'Recipes'
  }, [])

  return (
    <>
      Recipes :D
      <Box mt={16} />
      <RecipesTable />
    </>
  )
}

export default RecipesContent
