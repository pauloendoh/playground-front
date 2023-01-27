import { MinLength } from 'class-validator'
import {
  CategoryInput,
  InputMaybe,
} from '../../../../../graphql/generated/graphql'
import { IsStringExpose } from '../../../../../utils/decorators'

export class MyCategoryInput implements CategoryInput {
  id?: InputMaybe<string> | undefined

  @IsStringExpose()
  bgColor: string

  @IsStringExpose()
  @MinLength(1, { message: 'Category name is required' })
  name: string

  constructor() {
    this.bgColor = '#000000'
    this.name = ''
  }
}
