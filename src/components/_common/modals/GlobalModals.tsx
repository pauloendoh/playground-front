import useCurrentSavingModalStore from '../../../hooks/zustand/modals/useCurrentSavingModalStore'
import useExpenseModalStore from '../../../hooks/zustand/modals/useExpenseModalStore'
import useRecipeModalStore from '../../../hooks/zustand/modals/useRecipeModalStore'
import CurrentSavingModal from './CurrentSavingModal/CurrentSavingModal'
import ExpenseModal from './ExpenseModal/ExpenseModal'
import RecipeModal from './RecipeModal/RecipeModal'

const GlobalModals = () => {
  const recipeModalStore = useRecipeModalStore()
  const currentSavingModalStore = useCurrentSavingModalStore()
  const expenseModalStore = useExpenseModalStore()
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

      <ExpenseModal
        isOpen={expenseModalStore.isOpen}
        onClose={expenseModalStore.onClose}
        initialValue={expenseModalStore.initialValue}
      />
    </>
  )
}

export default GlobalModals
