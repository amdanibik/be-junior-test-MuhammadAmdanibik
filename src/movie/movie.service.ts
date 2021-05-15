import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieRepository) private movieRepository:MovieRepository){}
       
        async getMovies(name:string = ""):Promise<Movie[]>{
           
            let movie = await this.movieRepository.getMovie(name);
            return movie
        }

        async createMovie(data:CreateMovieDto):Promise<Movie>{
            return await this.movieRepository.createMovie(data);
        }
    
        async getMovieById(id:number):Promise<Movie>{
            const movie = await this.movieRepository.findOne(id)
            if(!movie){
                throw new NotFoundException(`movie with ID ${id} not found`)
            }
            return movie;
        }
    
        async updateMovie(id:number, data:CreateMovieDto):Promise<Movie>{
            const {name, language, status, rating} = data
            const update = await this.getMovieById(id)
            update.name = name
            update.language = language
            update.status = status
            update.rating = rating
            update.save()
            return update
        }
    
    
        async deleteMovie(id:number):Promise<void>{
            const data = await this.getMovieById(id);
            await this.movieRepository.delete({id:data.id})
        }

}
