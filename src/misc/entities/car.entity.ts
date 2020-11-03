import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  plate: string;

  @Column()
  remarks: string;  

  @Column()
  commissioningDate: Date;
}
