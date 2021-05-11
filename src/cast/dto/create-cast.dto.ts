import { Movie } from "src/movie/movie.entity"

export class CreateCastDto{
    name:string

    birthday:string

    deadday:string

    rating:number

    movieId:Movie
}