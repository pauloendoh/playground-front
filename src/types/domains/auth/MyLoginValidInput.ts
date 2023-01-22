import { IsString, MinLength } from 'class-validator'

export class MyLoginValidInput {
  @IsString({ message: 'Username or email is required.' })
  usernameOrEmail: string

  @IsString({ message: 'Password is required.' })
  @MinLength(6, { message: 'Password must have at least 6 characters.' })
  password: string
}
