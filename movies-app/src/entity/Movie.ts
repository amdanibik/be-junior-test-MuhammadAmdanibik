import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 30
    })
    language: string;

    @Column({
        length: 10
    })
    status: string;

    @Column({type: "int"})
    rating: number;
}