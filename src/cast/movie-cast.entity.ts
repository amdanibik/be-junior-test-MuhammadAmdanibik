
import { Cast } from "src/cast/cast.entity";
import { Movie } from "src/movie/movie.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class MovieCast extends BaseEntity{
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number

    @ManyToOne(type => Movie, movie => movie.id, {onDelete:"SET NULL"})
    @JoinColumn({name:"movie_id"})
    movie_id:Movie;

    @ManyToOne(type => Cast, cast => cast.id, {eager:false, onDelete:"CASCADE", onUpdate:"CASCADE"})
    @JoinColumn({name:"cast_id"})
    casts: Cast;

}