import useCurrentSavingModalStore from '../../../hooks/zustand/modals/useCurrentSavingModalStore'
import useRecipeModalStore from '../../../hooks/zustand/modals/useRecipeModalStore'
import CurrentSavingModal from './CurrentSavingModal/CurrentSavingModal'
import RecipeModal from './RecipeModal/RecipeModal'

const GlobalModals = () => {
  const recipeModalStore = useRecipeModalStore()
  const currentSavingModalStore = useCurrentSavingModalStore()
  return (
    <>
      <RecipeModal
        isOpen={recipeModalStore.isOpen}
        initialValue={recipeModalStore.initialValue}
        onClose={recipeModalStore.onClose}
      />

      <CurrentSavingModal
        isOpen={currentSavingModalStore.isOpen}
        onClose={currentSavingModalStore.onClose}
        initialValue={currentSavingModalStore.initialValue}
      />
    </>
  )
}

export default GlobalModals
