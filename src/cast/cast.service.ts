import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from './cast.entity';
import { CastRepository} from "./cast.repository";

import { CreateCastDto } from './dto/create-cast.dto';
import { MovieCastRepository } from './cast.repository';

@Injectable()
export class CastService {
    constructor(
        @InjectRepository(CastRepository)
        private castRepository:CastRepository,

        @InjectRepository(MovieCastRepository)
        private movieCastRepository:MovieCastRepository
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
        if(!cast){
            throw new NotFoundException(`cast with ID ${id} not found`)
        }
        return cast;
    }

    async updateCast(id:number, data:CreateCastDto):Promise<Cast>{
        const {name, birthday, deadday, rating, movieId} = data

        //get cast data by id
        const update = await this.getCastById(id)

        //updating data to table cast
        update.name = name
        update.birthday = birthday
        update.deadday = deadday
        update.rating = rating
        update.movie_id = movieId

        //get movie_cast data where id = cast_id
        const movieCast = await this.movieCastRepository.findOne({where:{cast_id:update.id}});

        if(!movieCast){
            throw new NotFoundException(`movie cast with cast ID ${id} not found`)
        }
        // updating movie_id to movie_cast table 
        const idMovie:number = parseInt(movieId.toString())
        movieCast.movie_id = idMovie
        
        update.save()
        movieCast.save()
        return update
    }


    async deleteCast(id:number):Promise<void>{
        const data = await this.getCastById(id);
        await this.castRepository.delete({id:data.id})
    }
}
