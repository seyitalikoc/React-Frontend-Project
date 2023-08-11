import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: [<LogLevel>(process.env.LOG_LEVEL)],
  });
  const cors = require('cors');
  app.use(cors())
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000); 
}     
bootstrap();     