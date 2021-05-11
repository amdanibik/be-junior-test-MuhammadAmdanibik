
import { Cast } from "src/cast/cast.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { MovieCast } from "./movie-cast.entity";
import { Movie } from "./movie.entity";

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie>{
    async getMovie():Promise<Movie[]>{
        try{

            const movie = await this.createQueryBuilder("movie")
                    .leftJoinAndSelect("movie.casts", "cast")
                    .getMany();

            return movie
        }catch(err){
            console.log(err)
        }
        
    }
    async createMovie(createMovieDto:CreateMovieDto):Promise<Movie>{
        try{
            const movie = new Movie;
            
            const {name, language, status, rating}=createMovieDto
            movie.name = name
            movie.language = language
            movie.status = status
            movie.rating = rating
            await movie.save()
            return movie
        }catch(err){
            console.log(err)
        }
        
    }
}