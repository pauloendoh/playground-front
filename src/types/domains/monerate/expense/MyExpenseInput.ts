import { IsOptional } from 'class-validator'
import { ExpenseInput, InputMaybe } from '../../../../graphql/generated/graphql'
import {
  IsArrayExpose,
  IsNumberExpose,
  IsNumberStringExpose,
  IsStringExpose,
} from '../../../../utils/decorators'

export class MyExpenseInput implements ExpenseInput {
  // @IsDateStringExpose()
  date?: InputMaybe<string> | undefined

  @IsStringExpose({ message: 'Description is required' })
  description?: InputMaybe<string> | undefined

  id?: InputMaybe<string> | undefined

  @IsStringExpose()
  name: string

  @IsNumberExpose(undefined)
  @IsOptional()
  rating?: InputMaybe<number> | undefined

  updatedAt?: InputMaybe<string> | undefined
  userId?: InputMaybe<string> | undefined

  @IsArrayExpose()
  @IsOptional()
  categoryIds?: string[] | undefined

  @IsNumberStringExpose()
  value: string

  constructor() {
    this.name = ''
    this.value = ''
    this.description = ''
    this.categoryIds = []
  }
}
