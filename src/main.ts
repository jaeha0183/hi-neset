import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 데코레이터가 없는 속성은 거름
      forbidNonWhitelisted: true, // 데코레이터가 없는 속성이 있으면 요청 자체를 막음
      transform: true, // url에서 받아온 string을 number로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
