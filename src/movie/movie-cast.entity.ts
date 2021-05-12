
import { Cast } from "src/cast/cast.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class MovieCast extends BaseEntity{
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number

    @Column({type:"int"})
    movie_id: number;

    @ManyToOne(type => Cast, cast => cast.id, {eager:false, onDelete:"CASCADE", onUpdate:"CASCADE"})
    @JoinColumn({name:"cast_id"})
    cast_id: Cast[];

}