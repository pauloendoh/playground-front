import { IExpenseFilter } from '../hooks/zustand/useExpenseFilterStore'

export const queryKeys = {
  recipes: ['recipes'],
  currentSavings: ['currentSavings'],
  wishlistItems: ['wishlistItems'],
  expenses: (filter?: IExpenseFilter) => ['expenses', filter],
  categories: ['categories'],
  salary: ['salary'],
  recurrentExpenses: ['recurrentExpenses'],
  issues: ['issues'],
}
