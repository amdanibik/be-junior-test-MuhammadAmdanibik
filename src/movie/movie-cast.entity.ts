
import { Cast } from "src/cast/cast.entity";
import { BaseEntity, Column, Entity, ManyToOne, ManyToMany, JoinTable, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Movie } from "./movie.entity";

@Entity()
export class MovieCast extends BaseEntity{
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number

    // @ManyToOne(type => Movie, movie => movie.id, {eager:false})
    // @JoinColumn({name:"movie_id"})
    // movie_id: Movie[];

    @ManyToOne(type => Cast, cast => cast.id, {eager:false})
    @JoinColumn({name:"cast_id"})
    cast_id: Cast[];

}