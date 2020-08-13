import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { CardEntity } from '../cards/card.entity'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  created: Date

  @Column({
    type: 'varchar',
    unique: true,
    length: 45,
  })
  email: string

  @Column('text')
  password: string

  @OneToMany(
    () => CardEntity,
    (card: CardEntity) => card.user,
  )
  cards: CardEntity[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  toResponseObject(showToken = true) {
    const { id, created, email, token } = this
    const responseObject: any = {
      id,
      created,
      email,
    }

    if (showToken) {
      responseObject.token = token
    }

    return responseObject
  }

  comparePassword(attempt: string) {
    return bcrypt.compare(attempt, this.password)
  }

  get token() {
    const { id, email } = this
    return jwt.sign({ id, email }, process.env.SECRET, { expiresIn: '7d' })
  }
}
