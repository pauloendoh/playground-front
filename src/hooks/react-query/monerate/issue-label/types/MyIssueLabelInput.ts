import { IsOptional, MinLength } from 'class-validator'
import { IssueLabelInput } from '../../../../../graphql/generated/graphql'
import { IsStringExpose } from '../../../../../utils/decorators'

export default class MyIssueLabelInput implements IssueLabelInput {
  @IsStringExpose()
  bgColor: string

  @IsStringExpose()
  @MinLength(1, { message: 'Label name is required' })
  name: string

  @IsStringExpose()
  @IsOptional()
  id: string

  constructor() {
    this.bgColor = '#000000'
    this.name = ''
  }
}
