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
  id?: string | undefined

  @IsStringExpose({ message: 'Description is required' })
  description?: string | undefined

  @IsStringExpose()
  name: string

  @IsNumberExpose(undefined)
  @IsOptional()
  rating?: InputMaybe<number> | undefined

  @IsArrayExpose()
  categoryIds?: string[] | undefined

  @IsNumberStringExpose(undefined, { message: 'Value must be a number' })
  value: string

  constructor() {
    this.name = ''
    this.value = ''
    this.description = ''
    this.categoryIds = []
    this.timesPerMonth = '0'
  }

  @IsNumberStringExpose(undefined, { message: 'Value must be a number' })
  timesPerMonth?: string | undefined

  date?: string | undefined

  userId?: string | undefined
}
