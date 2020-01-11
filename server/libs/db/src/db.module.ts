import { User } from './Models/user.model';
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import {TypegooseModule} from 'nestjs-typegoose';

const models = TypegooseModule.forFeature([User])

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
