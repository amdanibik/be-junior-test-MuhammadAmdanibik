import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { dbConfig } from './config/db.config';
import { CastModule } from './cast/cast.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync(dbConfig),
    MovieModule,
    CastModule,
  ],
})
export class AppModule {}
