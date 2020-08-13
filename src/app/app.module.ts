import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CardModule } from '../modules/card.module'
import { UserModule } from '../modules/user.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
