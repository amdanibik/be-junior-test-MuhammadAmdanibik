import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { dbConfig } from './config/db.config';
// import { AuthModule } from './auth/auth.module';
import { CastModule } from './cast/cast.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    MovieModule,
    CastModule,
  ],
})
export class AppModule {}
