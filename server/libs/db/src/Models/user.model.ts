
import {prop, modelOptions} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})

export class User {

    @ApiProperty({
        description: '使用者帳號',
        default: 'admin',
        example: 'admin',
    })
    @prop()
    username: string

    @ApiProperty({
        description: '密碼',
        minLength:5,
        default: '123456',
        example: '123456',
    })
    @prop()
    password: string
}