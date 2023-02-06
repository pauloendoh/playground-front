import ExpenseModal from '../../components/_common/modals/ExpenseModal/ExpenseModal'
import { MySavingValidInput } from '../../types/domains/monerate/saving/MySavingValidInput'
import useExpenseModalStore from '../zustand/modals/useExpenseModalStore'
import { useSaveSavingMutation } from './monerate/saving/useSaveSavingMutation'
import { useSavingsQuery } from './monerate/saving/useSavingsQuery'

const queryHook = useSavingsQuery()
const mutationHook = useSaveSavingMutation()
const inputValidator = MySavingValidInput

const modalStore = useExpenseModalStore()
const modal = ExpenseModal
