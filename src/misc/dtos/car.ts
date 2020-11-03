export class CarDto {
  id: number;
  model: string;
  plate: string;
  remarks: string;

  commisioningDate: Date;
}

export class NewCarDto {
  model: string;
  plate: string;
}

export class UpdateCarDto {
  remarks: string;
}
