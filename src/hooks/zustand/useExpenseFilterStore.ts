import { create } from 'zustand'

export interface IExpenseFilter {
  expensesByText: string
}

interface IStore {
  filter: IExpenseFilter
  setFilter: (filter: IExpenseFilter) => void
  setExpensesByText: (expensesByText: string) => void
}

const useExpenseFilterStore = create<IStore>((set, get) => ({
  filter: {
    expensesByText: '',
  },
  setFilter: (filter: IExpenseFilter) => set({ filter }),

  setExpensesByText: (expensesByText: string) => {
    set((state) => ({
      filter: {
        ...state.filter,
        expensesByText,
      },
    }))
  },
}))

export default useExpenseFilterStore
