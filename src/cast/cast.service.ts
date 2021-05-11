import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/movie/movie.entity';
import { Cast } from './cast.entity';
import { CastRepository } from "./cast.repository";
import { CreateCastDto } from './dto/create-cast.dto';

@Injectable()
export class CastService {
    constructor(
        @InjectRepository(CastRepository)
        private castRepository:CastRepository
    ){}

    async getCast():Promise<Cast[]>{
        let cast =  await this.castRepository.getCast();
        return cast
    }

    async createCast(data:CreateCastDto):Promise<Cast>{
        return await this.castRepository.createCast(data);
    }

    async getCastById(id:number):Promise<Cast>{
        const cast = await this.castRepository.findOne(id)
        return cast;
    }

    async updateCast(id:number, data:CreateCastDto):Promise<Cast>{
        const {name, birthday, deadday, rating} = data
        const update = await this.getCastById(id)
        if(!update){
            throw new NotFoundException(`cast with ID ${update.id} not found`)
        }
        update.name = name
        update.birthday = birthday
        update.deadday = deadday
        update.rating = rating
        update.save()
        return update
    }


    async deleteCast(id:number):Promise<void>{
        const data = await this.getCastById(id);
        console.log(id)
        if(!data){
            throw new NotFoundException(`cast with ID ${id} not found`)
        }
        await this.castRepository.delete({id:data.id})
    }
}
