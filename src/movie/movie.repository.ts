
import { EntityRepository, Repository } from "typeorm";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { Movie } from "./movie.entity";

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie>{
    async getMovie(name:string = ""):Promise<any[]>{
        try{

            //get movie all data from movie table, movie_cast table, and cast table
            const movie = await this.createQueryBuilder("movie")
            movie.leftJoinAndSelect("movie.moviecast", "moviecasts")
            movie.leftJoinAndSelect("moviecasts.casts", "cast")

            //add where if filter for movie's name is not empty
            name !== "" && movie.where('movie.name LIKE :name',{name:`%${name}%`})
            const getAllMovieData = await movie.getMany()

            //structuring data, show the result from movie and cast only
            const moviesData = getAllMovieData.map(movie=>{
                return {
                    id:movie.id,
                    name:movie.name,
                    language:movie.language,
                    status:movie.status,
                    rating:movie.rating,
                    casts: movie.moviecast.map(cast=>{
                        return {
                            name:cast.casts.name,
                            birthday:cast.casts.birthday,
                            deadday:cast.casts.deadday,
                            rating:cast.casts.rating,
                        }
                    })
                }
            })

            //returning structured data movies
            return moviesData

        }catch(err){
            console.log(err)
            return err
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
            return err
        }
        
    }
}