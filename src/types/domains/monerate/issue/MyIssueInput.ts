import { Expose } from 'class-transformer'
import { ArrayNotEmpty } from 'class-validator'
import type {
  InputMaybe,
  IssueInput,
} from '../../../../graphql/generated/graphql'
import { IsArrayExpose, IsStringExpose } from '../../../../utils/decorators'

export class MyIssueInput implements IssueInput {
  @Expose()
  id: InputMaybe<string>

  @Expose()
  isSolved: boolean

  @IsStringExpose()
  title: string
  @Expose()
  solution: string

  @Expose()
  userId: InputMaybe<string>

  constructor() {
    this.isSolved = false
    this.solution = ''
    this.title = ''
    this.frequency = 1
    this.intensity = 1
  }

  @Expose()
  frequency: number

  @Expose()
  intensity: number

  @Expose()
  createdAt: InputMaybe<string>

  @Expose()
  updatedAt: InputMaybe<string>

  @IsArrayExpose()
  @ArrayNotEmpty({
    message: 'Please select at least one label',
  })
  @Expose()
  labelIds: InputMaybe<string[]>

  @Expose()
  position: InputMaybe<number>
}
