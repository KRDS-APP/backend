import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDTO, UserRO } from '../models/users/user.dto'
import { UserEntity } from '../models/users/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async showAll(): Promise<UserRO[]> {
    const users = await this.userRepository.find()
    return users.map((user: any) => user.toResponseObject(false))
  }

  async login(data: UserDTO): Promise<UserRO> {
    const { email, password } = data
    const user = await this.userRepository.findOne({ where: { email } })

    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST)
    }

    return user
  }

  async register(data: UserDTO): Promise<UserRO> {
    const { email } = data
    let user = await this.userRepository.findOne({ email })
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }

    user = await this.userRepository.create(data)
    await this.userRepository.save(user)

    return user.toResponseObject()
  }
}
