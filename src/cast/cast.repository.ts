
import { MovieCast } from "src/movie/movie-cast.entity";
import { Movie } from "src/movie/movie.entity";
import { EntityRepository, Repository } from "typeorm";
import { Cast } from "./cast.entity";
import { CreateCastDto } from "./dto/create-cast.dto";

@EntityRepository(Cast)
export class CastRepository extends Repository<Cast>{
    async getCast():Promise<Cast[]>{
        try{
            const query = this.createQueryBuilder('cast')
            const cast = query.getMany()
            return cast 
        }catch(err){
            console.log(err)
        }
        
    }
    async createCast(createCastDto:CreateCastDto):Promise<Cast>{
        try{
            const {name, birthday, deadday, rating, movieId}=createCastDto
            const cast = new Cast();
            cast.name = name
            cast.birthday = birthday
            cast.deadday = deadday
            cast.rating = rating
            cast.movie_id = movieId

            const idMovie:number =parseInt(movieId.toString())
            const movieCast = new MovieCast();
            cast.cast_id = [movieCast]
            movieCast.movie_id = idMovie

            await this.save(cast)
            return cast
        }catch(err){
            console.log(err)
        }
        
    }
}


@EntityRepository(MovieCast)
export class MovieCastRepository extends Repository<MovieCast>{}