import { DbModule } from '@libs/db/db.module'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { CoursesController } from './courses/courses.controller';
import { EpisodesController } from './episodes/episodes.controller';

@Module({
  imports: [
    DbModule
  ],
  controllers: [AppController, UsersController, CoursesController, EpisodesController],
  providers: [AppService],
})
export class AppModule {}
