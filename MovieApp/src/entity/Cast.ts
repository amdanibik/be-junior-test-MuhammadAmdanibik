import { type } from "os";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Movie } from "./Movie";

@Entity()
export class Cast {

    @PrimaryGeneratedColumn("increment", {type: "bigint"})
    id: number;

    @Column({type: "varchar", length : 100})
    name: string;

    @Column({type : "timestamp"})
    birthday: Date;

    
    @Column({type : "timestamp"})
    deadday: Date;

    @Column({type: "int"})
    rating: number;

    @OneToMany(type => Movie, movie => movie.cast)
    movie: Movie[];

}
