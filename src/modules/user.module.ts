import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { UserEntity } from '../models/users/user.entity'
import { UserService } from '../services/user.service'
import { UserController } from '../controllers/user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
