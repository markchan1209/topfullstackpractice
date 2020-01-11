import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('全棧之巔 後台管理 ＡＰＩ 文件')
    .setDescription('提供後台管理介面調用ＡＰＩ')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-Doc', app, document);
  
  await app.listen(3000);
  console.log('http://localhost:3000/api-Doc 後台網址');
}
bootstrap();
