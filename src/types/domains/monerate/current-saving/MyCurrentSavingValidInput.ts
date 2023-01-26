import { IsNumberString } from 'class-validator'
import {
  CurrentSavingValidInput,
  InputMaybe,
} from '../../../../graphql/generated/graphql'

export class MyCurrentSavingValidInput implements CurrentSavingValidInput {
  id?: string | undefined

  createdAt?: InputMaybe<string> | undefined
  date?: InputMaybe<string> | undefined
  updatedAt?: InputMaybe<string> | undefined
  userId?: InputMaybe<string> | undefined

  @IsNumberString()
  value: string

  constructor() {
    this.value = ''
  }
}
