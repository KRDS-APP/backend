import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../../users/domain/user.entity'
import { CardModule } from '../../card/infrastructure/card.module'
import { UserModule } from '../../users/infrastructure/user.module'
import { AppController } from './app.controller'
import { AppService } from '../domain/app.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_URL,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_URL_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [UserEntity],
      synchronize: false,
    }),
    UserModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
