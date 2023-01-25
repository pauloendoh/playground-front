import { Button, Flex, Navbar } from '@mantine/core'
import { useRecipesQuery } from '../../../../hooks/react-query/recipe/useRecipesQuery'
import useRecipeModalStore from '../../../../hooks/zustand/modals/useRecipeModalStore'
import { MyRecipeValidInput } from '../../../../types/domains/recipe/MyRecipeValidInput'

type Props = {
  test?: string
}

const Sidebar = (props: Props) => {
  const { data } = useRecipesQuery()
  const { openModal } = useRecipeModalStore()

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Button onClick={() => openModal(new MyRecipeValidInput())}>
        + Create Recipe
      </Button>

      <Flex direction="column" mt={16}>
        {data?.map((recipe) => (
          <Button
            key={recipe.id}
            variant="subtle"
            styles={{
              inner: {
                justifyContent: 'flex-start',
              },
            }}
            onClick={() => openModal(recipe)}
          >
            {recipe.title} - <i>{recipe.description}</i>
          </Button>
        ))}
      </Flex>
    </Navbar>
  )
}

export default Sidebar
