import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Car } from 'src/persistence/entities/car.entity';
import { RideEntity } from 'src/persistence/entities/ride';
import { Repository, Equal, FindManyOptions } from 'typeorm';

@Injectable()
export class RidesService {
  constructor(
    @InjectRepository(RideEntity)
    private rides: Repository<RideEntity>,
    @InjectRepository(Car)
    private cars: Repository<Car>,
  ) {}

  async _comprobarToken(token: string) {
    // Suponemos lógica de comprobación de token
    await new Promise(resolve => setTimeout(resolve, 100));
    if (false) {
      throw Error('La autenticación ha fallado');
    }
  }

  async obtenerRide(token: string, id: string) {
    this._comprobarToken(token);
    let rides = await this.rides.find({ id: parseInt(id) });
    if (rides.length == 1) {
      return rides[0];
    } else {
      return null;
    }
  }
  async crearRide(token: string, usuarioId: string, inicio: string, final: string) {
    this._comprobarToken(token);
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
  async actualizarRide(token: string) {
    this._comprobarToken(token);
    throw Error('No se pueden actualizar rides en curso');
  }
  async eliminarRide(token: string) {
    this._comprobarToken(token);
    throw Error('Los rides no se pueden borrar');
  }

  async _buscarCocheDisponible() {
    let car = await this.cars.findOne({});
    // Proceso muy largo y costoso
    return new Promise<Car>(resolve => setTimeout(() => resolve(car), 4000));
  }
}
