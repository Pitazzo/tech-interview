import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Car } from 'src/misc/entities/car.entity';
import { RideEntity } from 'src/misc/entities/ride';
import { Repository, Equal, FindManyOptions } from 'typeorm';

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(RideEntity)
    private rides: Repository<RideEntity>,
    @InjectRepository(Car)
    private cars: Repository<Car>,
  ) {}

  async obtenerRide(id: string) {
    let rides = await this.rides.find({ id: parseInt(id) });
    if (rides.length == 1) {
      return rides[0];
    } else {
      throw Error('No se ha encontrado ride');
    }
  }
  async crearRide(usuarioId: string, inicio: string, final: string) {
    let car = await this._buscarCocheDisponible();
    this.rides.create({
      id: Math.floor(Math.random() * 10000),
      idUsuario: usuarioId,
      direccionInicio: inicio,
      direccionDestino: final,
      fechaViaje: new Date(),
      car: [car],
    });
  }
  async actualizarRide() {
    throw Error('No se pueden actualizar rides en curso');
  }
  async eliminarRide() {
    throw Error('Los rides no se pueden borrar');
  }

  async _buscarCocheDisponible() {
    let car = await this.cars.findOne({});
    // Proceso muy largo y costoso
    return new Promise<Car>(resolve => setTimeout(() => resolve(car), 4000));
  }


}
