import { DbModule } from '@libs/db/db.module'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    DbModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
