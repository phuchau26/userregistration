import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  
  const config = app.get(ConfigService);
  const port = config.get<number>('PORT') ?? 3000;
  
  const frontendUrl = config.get<string>('FRONTEND_URL') || 'http://localhost:5173';

  app.enableCors({
    origin: frontendUrl,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`MongoDB is connected`);

}
bootstrap().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
