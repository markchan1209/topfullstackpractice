import { Module, Global } from '@nestjs/common';
import { TypegooseModule} from 'nestjs-typegoose';
import { DbService } from './db.service';
import { User } from './Models/user.model';
import { Episode } from './Models/episode.model';
import { Course } from './Models/course.model';

const models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])

@Global()
@Module({
  imports: [ TypegooseModule.forRoot('mongodb://localhost:27017/topfullstackpractice',{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology:true
  }),
  models
],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
