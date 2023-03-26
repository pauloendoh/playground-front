import { IsString } from 'class-validator'
import {
  ColorProportionInput,
  InputMaybe,
  MixedColorInput,
} from '../../../../graphql/generated/graphql'

export class MyMixedColorInput implements MixedColorInput {
  constructor() {
    this.color = ''
    this.name = ''
    this.colorProportions = []
  }

  @IsString()
  color: string

  colorProportions: InputMaybe<ColorProportionInput[]>

  createdAt: InputMaybe<string>

  id: InputMaybe<string>

  @IsString()
  name: string

  updatedAt: InputMaybe<string>
  userId: InputMaybe<string>
}
