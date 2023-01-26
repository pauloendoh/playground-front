import { IsNumberString, IsString, MinLength } from 'class-validator'
import { ExpenseInput, InputMaybe } from '../../../../graphql/generated/graphql'

export class MyExpenseInput implements ExpenseInput {
  createdAt?: InputMaybe<string> | undefined
  date?: InputMaybe<string> | undefined
  description?: InputMaybe<string> | undefined
  id?: InputMaybe<string> | undefined

  @IsString()
  @MinLength(1)
  name: string
  rating?: InputMaybe<number> | undefined
  updatedAt?: InputMaybe<string> | undefined
  userId?: InputMaybe<string> | undefined

  @IsNumberString()
  value: string

  constructor() {
    this.name = ''
    this.value = ''
    this.description = ''
  }
}
