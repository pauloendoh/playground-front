import {
  InputMaybe,
  IssueValidInput,
} from '../../../../graphql/generated/graphql'

export class MyIssueValidInput implements IssueValidInput {
  id: InputMaybe<string>
  isSolved: boolean
  solution: string
  title: string
  userId: InputMaybe<string>

  constructor() {
    this.isSolved = false
    this.solution = ''
    this.title = ''
  }
}
