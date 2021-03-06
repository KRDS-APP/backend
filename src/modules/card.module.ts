import { Module } from '@nestjs/common'
import { CardService } from '../services/card.service'
import { CardController } from '../controllers/card.controller'

@Module({
  providers: [CardService],
  exports: [CardService],
  controllers: [CardController],
})
export class CardModule {}
