import { IsNotEmpty, IsString } from 'class-validator'
import {
  InputMaybe,
  RecipeValidInput,
} from '../../../graphql/generated/graphql'

export class MyRecipeValidInput implements RecipeValidInput {
  id?: string | undefined

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  description: string

  constructor() {
    this.title = ''
    this.description = ''
  }

  createdAt?: InputMaybe<string> | undefined
  updatedAt?: InputMaybe<string> | undefined
  userId?: InputMaybe<string> | undefined
  rating?: InputMaybe<number> | undefined
  savedPosition?: InputMaybe<number> | undefined
}
