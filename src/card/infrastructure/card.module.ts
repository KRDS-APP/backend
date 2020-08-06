import { Module } from '@nestjs/common'
import { CardService } from '../domain/card.service'
import { CardController } from './card.controller'

@Module({
  providers: [CardService],
  exports: [CardService],
  controllers: [CardController],
})
export class CardModule {}
