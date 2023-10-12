import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from 'src/app/features/car-process/models/car';
import { CarService } from 'src/app/features/car-process/services/car.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent {
  @Input() car:Car;
  constructor(public modal: NgbActiveModal,private carService: CarService) {}

 
}
