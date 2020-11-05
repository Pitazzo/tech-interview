import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CarsController } from './controllers/cars';
import { RidesController } from './controllers/rides';
import { Car } from './misc/entities/car.entity';
import { RideEntity } from './misc/entities/ride';
import { RidesService } from './services/rides.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'hiberus',
      password: '123',
      database: 'hiberus',
      entities: [Car, RideEntity],
      synchronize: true,
    }),
  ],
  controllers: [CarsController, RidesController],
  providers: [RidesService],
})
export class AppModule {}
