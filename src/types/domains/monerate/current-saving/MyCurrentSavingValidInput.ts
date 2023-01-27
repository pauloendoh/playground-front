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
  createdAt?: InputMaybe<string> | undefined
  date?: InputMaybe<string> | undefined
  id?: InputMaybe<string> | undefined
  updatedAt?: InputMaybe<string> | undefined
  userId?: InputMaybe<string> | undefined
}
