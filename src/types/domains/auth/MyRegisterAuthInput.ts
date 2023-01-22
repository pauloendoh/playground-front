import { IsEmail, IsString, MinLength } from "class-validator";

export class MyRegisterValidInput {
  @IsString({ message: "Username is required." })
  @MinLength(6, { message: "Username must have at least 6 characters." })
  username: string;

  @IsEmail(undefined, { message: "Email is required." })
  email: string;

  @IsString({ message: "Password is required." })
  @MinLength(6, { message: "Password must have at least 6 characters." })
  password1: string;

  @IsString({ message: "Password is required." })
  @MinLength(6, { message: "Password must have at least 6 characters." })
  password2: string;
}
