import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { configService } from './config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pack = require('./../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      urls: [configService.getBrockerUri()],
      queue: pack.name,
      queueOptions: { durable: false },
    },
  });

  await app.listen(configService.getPort());
}
bootstrap();
