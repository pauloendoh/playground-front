import { IsOptional } from 'class-validator'
import type {
  ExpenseInput,
  InputMaybe,
} from '../../../../graphql/generated/graphql'
import {
  IsArrayExpose,
  IsNumberExpose,
  IsNumberStringExpose,
  IsStringExpose,
} from '../../../../utils/decorators'

export class MyExpenseInput implements ExpenseInput {
  @IsStringExpose({ message: 'Description is required' })
  description?: string | undefined

  @IsStringExpose()
  name: string

  @IsNumberExpose(undefined)
  @IsOptional()
  rating?: InputMaybe<number> | undefined

  @IsArrayExpose()
  categoryIds?: string[] | undefined

  @IsNumberStringExpose()
  value: string

  constructor() {
    this.name = ''
    this.value = ''
    this.description = ''
    this.categoryIds = []
  }
  date?: string | undefined
  id?: string | undefined
  userId?: string | undefined
}
