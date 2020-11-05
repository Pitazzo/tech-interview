import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { NewCarDto, UpdateCarDto } from 'src/persistence/dtos/car';
import { Car } from 'src/persistence/entities/car.entity';
import { Repository } from 'typeorm';

@Controller('cars')
export class CarsController {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  @Post(':/id/getCar')
  async find(@Param() id: number) {
    return this.carsRepository.findOneOrFail(id);
  }

  @Post(':/id/registerCar')
  async register(@Body() newDto: NewCarDto) {
    return this.carsRepository.insert({
      model: newDto.model,
      plate: newDto.plate,
      remarks: '',
      commissioningDate: new Date(),
    });
  }

  @Post(':/id/updateCar')
  async update(@Param() id: number, @Body() updateDto: UpdateCarDto) {
    return this.carsRepository.update(
      { id: id },
      { remarks: updateDto.remarks },
    );
  }

  @Post(':/id/deleteCar')
  async delete(@Param() id: number) {
    return this.carsRepository.delete({ id: id });
  }
}
