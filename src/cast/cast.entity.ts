
import { MovieCast } from "src/movie/movie-cast.entity";
import { Movie } from "src/movie/movie.entity";
import { BaseEntity, Column, Entity, OneToOne, JoinColumn, ManyToOne, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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


    @ManyToOne(type => Movie, movie => movie.id, {eager:false})
    @JoinColumn({name:"movie_id"})
    movie_id:Movie;

    @OneToMany(type => MovieCast, movieCast=>movieCast.cast_id, {eager:false, cascade:true, onDelete:"CASCADE"})
    cast_id: MovieCast[];

}