import { IsNumberString } from 'class-validator'
import {
  InputMaybe,
  SavingValidInput,
} from '../../../../graphql/generated/graphql'

export class MySavingValidInput implements SavingValidInput {
  @IsNumberString()
  value: string

  constructor() {
    this.value = ''
    this.date = new Date().toISOString()
  }

  selectedAsAverageMonthlyGrowth: InputMaybe<boolean>
  createdAt: InputMaybe<string>
  date: InputMaybe<string>
  id: InputMaybe<string>
  updatedAt: InputMaybe<string>
  userId: InputMaybe<string>
}
