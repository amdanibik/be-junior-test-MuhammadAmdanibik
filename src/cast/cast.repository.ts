
import { MovieCast } from "src/cast/movie-cast.entity";
import { EntityRepository, Repository } from "typeorm";
import { Cast } from "./cast.entity";
import { CreateCastDto } from "./dto/create-cast.dto";

@EntityRepository(Cast)
export class CastRepository extends Repository<Cast>{
    async getCast(name:string=""):Promise<Cast[]>{
        try{
            //get all cast data from cast table
            const query = this.
            createQueryBuilder('cast')
            //add where statement if filter parameter is not empty
            name !== "" && query.where('cast.name LIKE :name',{name:`%${name}%`})
            const cast = query.getMany()
            return cast 
        }catch(err){
            console.log(err)
            return err
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

            //mapping data movie_cast table
            const movieCast = new MovieCast();
            cast.casts = [movieCast]
            movieCast.movie_id = movieId
            
            await this.save(cast)
            return cast
        }catch(err){
            return err
        }
        
    }
}


@EntityRepository(MovieCast)
export class MovieCastRepository extends Repository<MovieCast>{}