import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

export default class TypeOrmConfig{
    static getOrmConfig(configService:ConfigService):TypeOrmModuleOptions{
        return {
            type:"mysql",
            host: process.env.DB_HOST, 
            port: parseInt(process.env.DB_PORT) || 3306,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            entities: [__dirname + "/../**/*.entity{.ts,.js}"],
            synchronize:true
        }
    }
}

export const dbConfig:TypeOrmModuleAsyncOptions ={
    imports:[ConfigModule],
    useFactory: async (configService:ConfigService):
    Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject:[ConfigService]
}