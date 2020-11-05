import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RidesService } from 'src/business/rides.service';

@Controller('rides')
export class RidesController {
  constructor(private ridesService: RidesService) {}

  @Get(':/id')
  async get(@Param('id') id: string) {
    return this.ridesService.obtenerRide('TOKEN', id);
  }

  @Post()
  async post(@Body() body: { id: string; inicio: string; final: string }) {
    if (body.inicio === body.final) {
      throw new Error('Las direcciones de inicio y final deben ser diferentes');
    }
    return this.ridesService.crearRide(
      'TOKEN',
      body.id,
      body.inicio,
      body.final,
    );
  }

  @Put(':/id')
  async put() {
    return this.ridesService.actualizarRide('TOKEN');
  }

  @Delete(':/id')
  async delete() {
    return this.ridesService.eliminarRide('TOKEN');
  }
}
