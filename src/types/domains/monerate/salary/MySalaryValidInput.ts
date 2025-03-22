import { plainToInstance } from 'class-transformer'
import { IsNumber, IsString } from 'class-validator'
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

  @IsString()
  notes: string
}

export function emptyMySalaryValidInput(
  partial?: Partial<MySalaryValidInput>
): MySalaryValidInput {
  const obj: MySalaryValidInput = {
    id: null,
    value: 0,
    jobHoursPerMonth: 0,
    notes: '',
    ...partial,
  }

  const instance = plainToInstance(MySalaryValidInput, obj)
  return instance
}
