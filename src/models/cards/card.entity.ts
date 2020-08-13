import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { UserEntity } from '../users/user.entity'

@Entity('card')
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  company: string

  @Column('text')
  number: string

  @ManyToOne(
    () => UserEntity,
    (user: UserEntity) => user.cards,
  )
  user: UserEntity
}
