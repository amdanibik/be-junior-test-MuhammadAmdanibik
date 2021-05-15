import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private movieService : MovieService){}

    @Get()
    getMovies(@Query() filter):Promise<Movie[]>{
        //if filter is not empty, add name value as param
        const name = filter !== undefined ? filter.name : ""
        return this.movieService.getMovies(name)
    }

    @Get("/:id")
    getMovieById(@Param('id', ParseIntPipe) id):Promise<Movie>{
        return this.movieService.getMovieById(id)
    }

    @Post()
    createCast(@Body() data:CreateMovieDto):Promise<Movie>{
        return this.movieService.createMovie(data)
    }

    @Patch("/:id")
    updateCast(
        @Param('id', ParseIntPipe) id, 
        @Body() data:CreateMovieDto):Promise<Movie>{
        return this.movieService.updateMovie(id, data)
    }

    @Delete("/:id")
    deleteCast(
        @Param('id', ParseIntPipe) id):Promise<void>{
        return this.movieService.deleteMovie(id)
    }
}
