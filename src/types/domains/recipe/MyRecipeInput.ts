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
  createdAt: InputMaybe<string>
  id: InputMaybe<string>
  rating: InputMaybe<number>
  savedPosition: InputMaybe<number>
  updatedAt: InputMaybe<string>
  userId: InputMaybe<string>
}
