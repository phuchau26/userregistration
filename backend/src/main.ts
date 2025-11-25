import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.get<number>('PORT') ?? 3000;

  // Get UserService và gọi API lấy tất cả users
  const userService = app.get(UserService);

  await app.listen(port);
  console.log(`✅ Server is running on http://localhost:${port}`);
  console.log(`✅ MongoDB is connected`);

  // Lắng nghe kết nối đã thiết lập xong, sau đó gọi API get all users
  setTimeout(() => {
    userService
      .findAll()
      .then((allUsers) => {
        console.log(
          '📋 All Users in Database:',
          JSON.stringify(allUsers, null, 2),
        );
      })
      .catch((error) => {
        console.error(
          '❌ Error fetching users:',
          error instanceof Error ? error.message : error,
        );
      });
  }, 1000);
}
bootstrap().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
