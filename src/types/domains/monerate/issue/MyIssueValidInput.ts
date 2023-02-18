import { Expose } from 'class-transformer'
import type {
  InputMaybe,
  IssueInput,
} from '../../../../graphql/generated/graphql'

export class MyIssueInput implements IssueInput {
  @Expose()
  id: InputMaybe<string>

  @Expose()
  isSolved: boolean

  @Expose()
  solution: string

  @Expose()
  title: string

  @Expose()
  userId: InputMaybe<string>

  constructor() {
    this.isSolved = false
    this.solution = ''
    this.title = ''
  }

  @Expose()
  createdAt: InputMaybe<string>

  @Expose()
  updatedAt: InputMaybe<string>

  @Expose()
  labelIds: InputMaybe<string[]>

  @Expose()
  position: InputMaybe<number>
}
