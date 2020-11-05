import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class RideEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idUsuario: string;

  @Column()
  direccionInicio: string;

  @Column()
  direccionDestino: string;

  @Column()
  fechaViaje: Date;

  @ManyToMany(() => Car)
  car: Car[];
}
