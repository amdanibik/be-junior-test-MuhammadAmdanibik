import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Cast } from "./Cast";

@Entity({name: "movie"})
export class Movie {

    @PrimaryGeneratedColumn("increment", {type : "bigint"})
    id: number;

    @Column({type: "varchar", length: 100})
    name: string;

    @Column({type: "varchar", length: 30})
    language: string;

    @Column({type: "varchar", length: 10})
    status: string;

    @Column({type: "integer"})
    rating: number;

    @ManyToOne(type => Cast, cast => cast.movie)
    cast: Cast

}
