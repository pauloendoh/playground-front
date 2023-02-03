import { Expose } from 'class-transformer'
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
  @Expose()
  id: string | null

  @IsStringExpose({ message: 'Description is required' })
  description: string | null

  @IsStringExpose()
  name: string

  @IsNumberExpose(undefined)
  @IsOptional()
  rating: InputMaybe<number> | null

  @IsArrayExpose()
  categoryIds: string[] | null

  @IsNumberStringExpose(undefined, { message: 'Value must be a number' })
  value: string

  constructor() {
    this.name = ''
    this.value = ''
    this.description = ''
    this.categoryIds = []
    this.timesPerMonth = null
  }

  @IsNumberStringExpose(undefined, { message: 'Value must be a number' })
  @IsOptional()
  timesPerMonth: string | null

  date: string | null

  userId: string | null
}
