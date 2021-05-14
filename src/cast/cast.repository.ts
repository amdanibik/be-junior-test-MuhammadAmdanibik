
import { MovieCast } from "src/cast/movie-cast.entity";
import { Movie } from "src/movie/movie.entity";
import { EntityRepository, Repository } from "typeorm";
import { Cast } from "./cast.entity";
import { CreateCastDto } from "./dto/create-cast.dto";

@EntityRepository(Cast)
export class CastRepository extends Repository<Cast>{
    async getCast(name:string=""):Promise<Cast[]>{
        try{
            const query = this.createQueryBuilder('cast')
            //add where statement if name parameter is not empty
            name !== "" && query.where('cast.name LIKE :name',{name:`'%${name}%'`})
            console.log(query.getQueryAndParameters())
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

            //mapping data cast table
            cast.name = name
            cast.birthday = birthday
            cast.deadday = deadday
            cast.rating = rating

            //insert to moviecast
            const movieCast = new MovieCast();
            cast.casts = [movieCast]
            movieCast.movie_id = movieId

            await this.save(cast)
            return cast
        }catch(err){
            console.log(err)
        }
        
    }
}


@EntityRepository(MovieCast)
export class MovieCastRepository extends Repository<MovieCast>{}