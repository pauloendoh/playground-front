import { IsNumberString } from 'class-validator'
import {
  CurrentSavingValidInput,
  InputMaybe,
} from '../../../../graphql/generated/graphql'

export class MyCurrentSavingValidInput implements CurrentSavingValidInput {
  @IsNumberString()
  value: string

  constructor() {
    this.value = ''
  }
  createdAt: InputMaybe<string>
  date: InputMaybe<string>
  id: InputMaybe<string>
  updatedAt: InputMaybe<string>
  userId: InputMaybe<string>
}
