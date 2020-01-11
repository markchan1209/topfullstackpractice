import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/Models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
@Crud({
    model: User
})
//自動ＣＲＵＤ渲染
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){}
}
