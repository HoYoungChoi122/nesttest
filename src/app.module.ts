import { Module, NestModule,RequestMethod, MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
import { CatService } from './cat/cat.service';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CatModule, UserModule, AuthModule],
  // controllers: [AppController],
  // providers: [AppService],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: 'cat/*', method: RequestMethod.GET });
  }
}