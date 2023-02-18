import useCategoryModalStore from '../../../hooks/zustand/modals/useCategoryModalStore'
import useExpenseModalStore from '../../../hooks/zustand/modals/useExpenseModalStore'
import useIssueModalStore from '../../../hooks/zustand/modals/useIssueModalStore'
import useRecipeModalStore from '../../../hooks/zustand/modals/useRecipeModalStore'
import useSavingModalStore from '../../../hooks/zustand/modals/useSavingModalStore'
import CategoryModal from './CategoryModal/CategoryModal'
import IssueModal from './ExpenseModal copy/IssueModal'
import ExpenseModal from './ExpenseModal/ExpenseModal'
import RecipeModal from './RecipeModal/RecipeModal'
import SavingModal from './SavingModal/SavingModal'

const GlobalModals = () => {
  const recipeModalStore = useRecipeModalStore()
  const currentSavingModalStore = useSavingModalStore()
  const expenseModalStore = useExpenseModalStore()
  const categoryModalStore = useCategoryModalStore()
  const issueModalStore = useIssueModalStore()

  return (
    <>
      <RecipeModal
        isOpen={recipeModalStore.isOpen}
        initialValue={recipeModalStore.initialValue}
        onClose={recipeModalStore.onClose}
      />

      <SavingModal
        isOpen={currentSavingModalStore.isOpen}
        onClose={currentSavingModalStore.onClose}
        initialValue={currentSavingModalStore.initialValue}
      />

      <ExpenseModal
        isOpen={expenseModalStore.isOpen}
        onClose={expenseModalStore.onClose}
        initialValue={expenseModalStore.initialValue}
      />

      <CategoryModal
        isOpen={categoryModalStore.isOpen}
        onClose={categoryModalStore.onClose}
        initialValue={categoryModalStore.initialValue}
      />

      <IssueModal
        isOpen={issueModalStore.isOpen}
        onClose={issueModalStore.onClose}
        initialValue={issueModalStore.initialValue}
      />
    </>
  )
}

export default GlobalModals
