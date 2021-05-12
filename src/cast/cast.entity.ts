
import { MovieCast } from "src/movie/movie-cast.entity";
import { Movie } from "src/movie/movie.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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


    @ManyToOne(type => Movie, movie => movie.id, {eager:false, onDelete:"SET NULL"})
    @JoinColumn({name:"movie_id"})
    movie_id:Movie;

    @OneToMany(type => MovieCast, movieCast=>movieCast.cast_id, {eager:false, cascade:true})
    cast_id: MovieCast[];

}