import { getRepository } from "typeorm";
import { Cast } from "./entity/Cast";
import { Movie } from "./entity/Movie";


export const Bootstrap = async () => {
    const castRepo = getRepository(Cast);
    const cast = castRepo.create({ name: "gundala", birthday: '2021-05-16 22:00', deadday: "2021-05-16 22:01", rating: 1 })
    
    await castRepo.save(cast).catch((err) => {
        console.log("Err : ", err)
    })

    console.log("New cast saved, data : ", cast);
    
    const movieRepo = getRepository(Movie);
    const movie = new Movie();
    movie.name = "avenger";
    movie.language = "mandarin";
    movie.status = "ongoing";
    movie.rating = 2;
    movie.cast = cast;

    await movieRepo.save(movie).catch((err) => {
        console.log("Err : ", err);
    });

    console.log("New movie added ", movie);
    
}