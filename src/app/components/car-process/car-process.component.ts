import { Component, OnInit } from '@angular/core';
import { CarAddComponent } from './car-add/car-add.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from 'src/app/models/car';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';

@Component({
  selector: 'app-car-process',
  templateUrl: './car-process.component.html',
  styleUrls: ['./car-process.component.css'],
})
export class CarProcessComponent implements OnInit {
  cars: Car[] = [];
  car: Car;
  filterText = '';
  showInfo: boolean[] = [];

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  add() {}

  goToAddCar(car: Car) {
    const modalRef = this.modalService.open(CarAddComponent, {
      centered: true,
    });
    modalRef.componentInstance.car = car;
  }
  deleteCar(car: Car) {
    const modalRef = this.modalService.open(DeleteCarComponent, {
      centered: true,
    });
    modalRef.componentInstance.car = car;
  }
  updateCar(car: Car) {
    const modalRef = this.modalService.open(UpdateCarComponent, {
      centered: true,
    });
    modalRef.componentInstance.car = car;
  }
}
