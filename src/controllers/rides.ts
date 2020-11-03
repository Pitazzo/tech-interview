import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RidesService } from 'src/services/rides/rides.service';

@Controller('rides')
export class RidesController {
  constructor(private ridesService: RidesService) {}

  async _comprobarToken(token: string) {
    // Suponemos lógica de comprobación de token
    await new Promise(resolve => setTimeout(resolve, 100));
    if (false) {
      throw Error('La autenticación ha fallado');
    }
  }

  @Get(':/id')
  async get(@Param('id') id: string) {
    await this._comprobarToken('...');
    return this.ridesService.obtenerRide(id);
  }

  @Post()
  async post(@Body() body: { id: string; inicio: string; final: string }) {
    await this._comprobarToken('...');
    return this.ridesService.crearRide(body.id, body.inicio, body.final);
  }

  @Put(':/id')
  async put() {
    await this._comprobarToken('...');
    return this.ridesService.actualizarRide();
  }

  @Delete(':/id')
  async delete() {
    await this._comprobarToken('...');
    return this.ridesService.eliminarRide();
  }
}
