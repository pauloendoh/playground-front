import { IsNotIn, IsOptional, IsString } from 'class-validator'
import {
  InputMaybe,
  RawColorInput,
} from '../../../../graphql/generated/graphql'

export class MyRawColorInput implements RawColorInput {
  constructor() {
    this.color = ''
    this.name = ''
  }

  @IsString()
  @IsNotIn([''])
  color: string

  createdAt: string

  @IsString()
  @IsOptional()
  id: string

  @IsString()
  name: string
  updatedAt: string

  userId: InputMaybe<string>
}
