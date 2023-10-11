import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RentComponent } from '../rent/rent.component';
import { CarMockService } from 'src/app/shared/services/mock-services/concretes/car-mock.service';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  filterText = '';
  showInfo: boolean[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private carMockService: CarMockService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrand(params['id']);
      } else {
        this.getCars();
      }
    });
  }

  goToRent(car: Car) {
    const modalRef = this.modalService.open(RentComponent, { centered: true });
    modalRef.componentInstance.car = car;
  }

  getCars() {
    this.carMockService.getCars().subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }

  getCarsByBrand(id: number) {
    this.carMockService.getCarsByBrand(id).subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }

  initializeShowInfoArray() {
    this.showInfo = Array(this.cars.length).fill(false);
  }

  showAdditionalInfo(index: number) {
    this.showInfo[index] = true;
  }

  hideAdditionalInfo(index: number) {
    this.showInfo[index] = false;
  }
}
