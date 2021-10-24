import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { config } from './config/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(configService.get(config.api.port), () => {
    console.log(
      `SERVER READY ON http://${configService.get(
        config.api.host,
      )}:${configService.get(config.api.port)}`,
    );
  });
}
bootstrap();
