export interface Maintenance {
  id: number;
  state: number;
  plate: string;
  startDate: Date;
  returnDate: Date;
  carId: number;
}
