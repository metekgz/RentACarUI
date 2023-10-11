import { Component, OnInit } from '@angular/core';
import { CarAddComponent } from './car-add/car-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from 'src/app/models/car';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { Brand } from 'src/app/models/brand';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { Model } from 'src/app/models/model';
import { AddModelComponent } from './add-model/add-model.component';

@Component({
  selector: 'app-car-process',
  templateUrl: './car-process.component.html',
  styleUrls: ['./car-process.component.css'],
})
export class CarProcessComponent implements OnInit {
  cars: Car[] = [];
  car: Car;
  brands: Brand[] = [];
  brand: Brand;
  models: Model[] = [];
  model: Model;
  filterText = '';
  showInfo: boolean[] = [];

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  addCar(car: Car) {
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

  addBrand(brand: Brand) {
    const modalRef = this.modalService.open(AddBrandComponent, {
      centered: true,
    });
    modalRef.componentInstance.brand = brand;
  }
  deleteBrand(brand: Brand) {
    const modalRef = this.modalService.open(DeleteBrandComponent, {
      centered: true,
    });
    modalRef.componentInstance.car = brand;
  }
  updateBrand(brand: Brand) {
    const modalRef = this.modalService.open(UpdateBrandComponent, {
      centered: true,
    });
    modalRef.componentInstance.car = brand;
  }
  addModel(model: Model) {
    const modalRef = this.modalService.open(AddModelComponent, {
      centered: true,
    });
    modalRef.componentInstance.model = model;
  }
  // addMaintenance(maintenance: Maintenance) {
  //   const modalRef = this.modalService.open(AddMaintenanceComponent, {
  //     centered: true,
  //   });
  //   modalRef.componentInstance.maintenance = maintenance;
  // }
  // deleteMaintenance(maintenance: Maintenance) {
  //   const modalRef = this.modalService.open(DeleteMaintenanceComponent, {
  //     centered: true,
  //   });
  //   modalRef.componentInstance.maintenance = maintenance;
  // }
  // updateMaintenance(maintenance: Maintenance) {
  //   const modalRef = this.modalService.open(UpdateMaintenanceComponent, {
  //     centered: true,
  //   });
  //   modalRef.componentInstance.maintenance = maintenance;
  // }
}
