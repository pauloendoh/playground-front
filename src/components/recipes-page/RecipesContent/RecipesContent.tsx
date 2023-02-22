import { Box, Container } from '@mantine/core'
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
    <Container>
      Recipes :D
      <Box mt={16} />
      <RecipesTable />
    </Container>
  )
}

export default RecipesContent
