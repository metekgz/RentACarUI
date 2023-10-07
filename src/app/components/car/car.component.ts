import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

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
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
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

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }

  initializeShowInfoArray() {
    this.showInfo = Array(this.cars.length).fill(false);
  }

  addToCart(car: Car) {
    this.toastrService.success('Sepete Eklendi', car.modelName);
    this.cartService.addToCart(car);
  }

  showAdditionalInfo(index: number) {
    this.showInfo[index] = true;
  }

  hideAdditionalInfo(index: number) {
    this.showInfo[index] = false;
  }
  
}
