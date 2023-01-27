import { IsOptional, MinLength } from 'class-validator'
import { CategoryInput } from '../../../../../graphql/generated/graphql'
import { IsStringExpose } from '../../../../../utils/decorators'

export default class MyCategoryInput implements CategoryInput {
  @IsStringExpose()
  bgColor: string

  @IsStringExpose()
  @MinLength(1, { message: 'Category name is required' })
  name: string

  @IsStringExpose()
  @IsOptional()
  id: string

  constructor() {
    this.bgColor = '#000000'
    this.name = ''
  }
}
