
import { Cast } from "src/cast/cast.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovieCast } from "./movie-cast.entity";

@Entity()
export class Movie extends BaseEntity{
    
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number
    
    @Column({type:"varchar", length:100})
    name:string

    @Column({type:"varchar", length:30})
    language:string

    @Column({type:"varchar", length:10})
    status:string

    @Column({type:"int"})
    rating:number
    
    @OneToMany(type => Cast, cast => cast.movie_id, {eager:true})
    casts:Cast[]

    // @OneToMany(type => MovieCast, movieCast => movieCast.movie_id, {eager:true})
    // cast:MovieCast[]

}