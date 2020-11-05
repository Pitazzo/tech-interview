import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CarsController } from './api/cars';
import { RidesController } from './api/rides';
import { RidesService } from './business/rides.service';
import { Car } from './persistence/entities/car.entity';
import { RideEntity } from './persistence/entities/ride';

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
