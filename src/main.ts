import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { APP_ENV, APP_PORT } from '@common/environment';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(APP_PORT, '0.0.0.0').then(async () => {
    Logger.log(
      `✅  Application is running on: ${await app.getUrl()}`,
      'NestJS',
    );

    if (APP_ENV !== 'localhost') {
      return;
    } else {
      console.info(`Server Details:
          port: ${APP_PORT},
          environment: ${APP_ENV},
          
          `);
    }
  });
}
bootstrap().catch((e) => {
  Logger.error('❌  Error starting server', e, 'NestJS', false);
  throw e;
});
