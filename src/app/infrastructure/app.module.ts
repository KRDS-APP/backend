import { Module } from '@nestjs/common'
import { CardModule } from '../../card/infrastructure/card.module'
import { UserModule } from '../../user/infrastructure/user.module'
import { AppController } from './app.controller'
import { AppService } from '../domain/app.service'

@Module({
  imports: [UserModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
