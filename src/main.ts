import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app/app.module'

const port = process.env.PORT || 8080

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.enableCors()
  await app.listen(port)
  Logger.log(`Server is running on http://localhost:${port}`, 'Bootstrap')
}
bootstrap()
