import { IsNumber } from 'class-validator'
import type {
  InputMaybe,
  SalaryValidInput,
} from '../../../../graphql/generated/graphql'

export class MySalaryValidInput implements SalaryValidInput {
  id: InputMaybe<string>

  @IsNumber()
  value: InputMaybe<number>

  @IsNumber()
  jobHoursPerMonth: number
}
