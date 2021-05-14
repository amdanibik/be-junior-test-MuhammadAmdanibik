
import { MovieCast } from "src/cast/movie-cast.entity";
import { Movie } from "src/movie/movie.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cast extends BaseEntity{
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number

    @Column({type:"varchar", length:100})
    name:string
    
    @Column({type:"timestamp"})
    birthday:string

    @Column({type:"timestamp"})
    deadday:string

    @Column({type:"int"})
    rating:number


    @OneToMany(type => MovieCast, movieCast => movieCast.casts,{eager:false, cascade:true})
    casts: MovieCast[];

}