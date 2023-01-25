import { IsNumber, Min } from 'class-validator'
import { CurrentSavingValidInput } from '../../../../graphql/generated/graphql'

export class MyCurrentSavingValidInput implements CurrentSavingValidInput {
  id?: string | undefined

  @IsNumber()
  @Min(1)
  value!: number

  constructor() {
    this.value = 0
  }
}
