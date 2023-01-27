import { IsNotEmpty, IsString } from 'class-validator'
import { InputMaybe, RecipeInput } from '../../../graphql/generated/graphql'

export class MyRecipeInput implements RecipeInput {
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
  id?: InputMaybe<string> | undefined
  rating?: InputMaybe<number> | undefined
  savedPosition?: InputMaybe<number> | undefined
  updatedAt?: InputMaybe<string> | undefined
  userId?: InputMaybe<string> | undefined
}
