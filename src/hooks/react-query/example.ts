import IssueModal from '../../components/_common/modals/ExpenseModal copy/IssueModal'
import { MySavingValidInput } from '../../types/domains/monerate/saving/MySavingValidInput'
import useIssueModalStore from '../zustand/modals/useIssueModalStore'
import { useIssuesQuery } from './monerate/issue/useIssuesQuery'
import { useSaveIssueMutation } from './monerate/issue/useSaveIssueMutation'

const queryHook = useIssuesQuery()
const mutationHook = useSaveIssueMutation()
const inputValidator = MySavingValidInput

const modalStore = useIssueModalStore()
const modal = IssueModal
