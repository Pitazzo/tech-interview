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
import { NewCarDto, UpdateCarDto } from 'src/misc/dtos/car';
import { Car } from 'src/misc/entities/car.entity';
import { Repository } from 'typeorm';

@Controller('cars')
export class CarsController {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  @Get(':/id')
  async get(@Param() id: number) {
    return this.carsRepository.findOneOrFail(id);
  }

  @Post()
  async post(@Body() newDto: NewCarDto) {
    return this.carsRepository.insert({
      model: newDto.model,
      plate: newDto.plate,
      remarks: '',
      commissioningDate: new Date(),
    });
  }

  @Put(':/id')
  async put(@Param() id: number, @Body() updateDto: UpdateCarDto) {
    return this.carsRepository.update(
      { id: id },
      { remarks: updateDto.remarks },
    );
  }

  @Delete(':/id')
  async delete(@Param() id: number) {
    return this.carsRepository.delete({ id: id });
  }
}
