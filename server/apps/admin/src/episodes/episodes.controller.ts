import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Episode } from '@libs/db/Models/episode.model';
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model: Episode
})
@ApiTags('課時')
@Controller('episodes')
export class EpisodesController {
        constructor(@InjectModel(Episode) private readonly model:ReturnModelType<typeof Episode>){}
}
