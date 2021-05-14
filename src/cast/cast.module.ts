import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastController } from './cast.controller';
import { CastRepository } from './cast.repository';
import { CastService } from './cast.service';
import { MovieCastRepository } from './cast.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([CastRepository, MovieCastRepository])
  ],
  controllers: [CastController],
  providers: [CastService]
})
export class CastModule {}
