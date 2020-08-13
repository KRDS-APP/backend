import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { CardEntity } from '../models/cards/card.entity'
import { CardService } from '../services/card.service'
import { CardController } from '../controllers/card.controller'

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  providers: [CardService],
  exports: [CardService],
  controllers: [CardController],
})
export class CardModule {}
