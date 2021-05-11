import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class MovieCast {

    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({type: "bigint"})
    movie_id: number;

    @Column({type: "bigint"})
    cast_id: number;
}