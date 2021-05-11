import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Cast } from './cast.entity';
import { CastService } from './cast.service';
import { CreateCastDto } from './dto/create-cast.dto';

@Controller('cast')
export class CastController {
    constructor(private castService:CastService){}

    @Get()
    getCast():Promise<Cast[]>{
        return this.castService.getCast()
    }

    @Get("/:id")
    getCastById(@Param('id', ParseIntPipe) id):Promise<Cast>{
        return this.castService.getCastById(id)
    }

    @Post()
    createCast(@Body() data:CreateCastDto):Promise<Cast>{
        return this.castService.createCast(data)
    }

    @Patch("/:id")
    updateCast(
        @Param('id', ParseIntPipe) id, 
        @Body() data:CreateCastDto):Promise<Cast>{
        return this.castService.updateCast(id, data)
    }

    @Delete("/:id")
    deleteCast(
        @Param('id', ParseIntPipe) id):Promise<void>{
        return this.castService.deleteCast(id)
    }

}
