import useAverageMonthlyGrowthModalStore from '../../../hooks/zustand/modals/useAverageMonthlyGrowthModalStore'
import useCategoryModalStore from '../../../hooks/zustand/modals/useCategoryModalStore'
import useExpenseModalStore from '../../../hooks/zustand/modals/useExpenseModalStore'
import useIssueInsightsModalStore from '../../../hooks/zustand/modals/useIssueInsightsModalStore'
import useIssueLabelModalStore from '../../../hooks/zustand/modals/useIssueLabelModalStore'
import useIssueModalStore from '../../../hooks/zustand/modals/useIssueModalStore'
import useRecipeModalStore from '../../../hooks/zustand/modals/useRecipeModalStore'
import useSavingModalStore from '../../../hooks/zustand/modals/useSavingModalStore'
import AverageMonthlyGrowthModal from './AverageMonthlyGrowthModal/AverageMonthlyGrowthModal'
import CategoryModal from './CategoryModal/CategoryModal'
import ExpenseModal from './ExpenseModal/ExpenseModal'
import IssueInsightsModal from './IssueInsightsModal/IssueInsightsModal'
import IssueLabelModal from './IssueLabelModal/IssueLabelModal'
import IssueModal from './IssueModal/IssueModal'
import RecipeModal from './RecipeModal/RecipeModal'
import SavingModal from './SavingModal/SavingModal'
import WishlistItemModal from './WishlistItemModal/WishlistItemModal'

const GlobalModals = () => {
  const recipeModalStore = useRecipeModalStore()
  const currentSavingModalStore = useSavingModalStore()
  const expenseModalStore = useExpenseModalStore()
  const categoryModalStore = useCategoryModalStore()
  const issueModalStore = useIssueModalStore()
  const issueLabelModalStore = useIssueLabelModalStore()
  const issueInsightsModalStore = useIssueInsightsModalStore()
  const averageMonthlyGrowthModalStore = useAverageMonthlyGrowthModalStore()

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

      <IssueLabelModal
        isOpen={issueLabelModalStore.isOpen}
        onClose={issueLabelModalStore.onClose}
        initialValue={issueLabelModalStore.initialValue}
      />

      <IssueInsightsModal
        isOpen={issueInsightsModalStore.isOpen}
        onClose={issueInsightsModalStore.onClose}
      />

      <AverageMonthlyGrowthModal
        isOpen={averageMonthlyGrowthModalStore.isOpen}
        onClose={averageMonthlyGrowthModalStore.onClose}
      />
      <WishlistItemModal />
    </>
  )
}

export default GlobalModals
