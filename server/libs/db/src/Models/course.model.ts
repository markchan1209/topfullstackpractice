import { Episode } from './episode.model';
import {prop, modelOptions, arrayProp, Ref} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})

export class Course {

    @ApiProperty({description: '課程名稱'})
    @prop()
    name: string

    @ApiProperty({description: '封面照'})
    @prop() //有這行才會進資料庫
    cover: string

    @arrayProp({itemsRef: 'Episode'}) //items 一定要s
    episods: Ref<Episode>[]
}