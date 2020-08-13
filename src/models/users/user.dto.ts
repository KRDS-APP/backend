/* eslint-disable max-classes-per-file */
import { IsNotEmpty, IsEmail } from 'class-validator'

export class UserDTO {
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}

export class UserRO {
  id: string

  email: string

  created: Date

  token?: string
}
