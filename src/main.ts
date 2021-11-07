import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { config } from './config/config';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserModule } from './components/user/user.module';
import { version, description } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.enableCors();

  //#region Swagger config
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Elkarzabal')
    .setDescription(description)
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    include: [UserModule, AppModule],
    ignoreGlobalPrefix: false,
  });

  SwaggerModule.setup('doc', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
  //#endregion

  await app.listen(configService.get(config.api.port), () => {
    console.log(
      `SERVER READY ON http://${configService.get(
        config.api.host,
      )}:${configService.get(config.api.port)}`,
    );
  });
}
bootstrap();
