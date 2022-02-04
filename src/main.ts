import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ContextAsyncHooks} from 'traceability';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(ContextAsyncHooks.getExpressMiddlewareTracking());
  await app.listen(3001);
}
bootstrap();
