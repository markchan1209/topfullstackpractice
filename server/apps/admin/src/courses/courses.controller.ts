import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud  } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/Models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({ model: Course})
@ApiTags('課程')
@Controller('courses')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model:ReturnModelType<typeof Course>){}
}
