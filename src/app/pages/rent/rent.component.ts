import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from 'src/app/shared/models/car';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent {
  @Input() car:Car;
  constructor(public modal: NgbActiveModal,private carService: CarService) {}

 
}
