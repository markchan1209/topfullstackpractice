import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('全棧之巔 行動裝置 ＡＰＩ文件')
    .setDescription('提供行動裝置資料調用ＡＰＩ服務')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-Doc', app, document);

  await app.listen(3001);
  console.log('http://localhost:3001/api-Doc ＡＰＰ程序')
}
bootstrap();
