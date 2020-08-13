import {
  Controller,
  Post,
  Get,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { UserDTO } from '../models/users/user.dto'
import { UserService } from '../services/user.service'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('api/users')
  showAllUser() {
    return this.userService.showAll()
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserDTO) {
    return this.userService.login(data)
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.userService.register(data)
  }
}
