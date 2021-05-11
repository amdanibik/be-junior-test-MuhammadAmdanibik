import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig:TypeOrmModuleOptions ={

    type:"mysql",
    host: "localhost", 
    port: 3306,
    database:"movies",
    username:"root",
    password:"root",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize:true
}