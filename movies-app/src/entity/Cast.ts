import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";

@Entity()
export class Cast {

    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    birthday: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    deadday: string;

    @Column({type: "int"})
    rating: number;
}