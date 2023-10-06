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

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
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
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.cars = response;
    });
  }

  addToCart(car: Car) {
    this.toastrService.success('Sepete Eklendi', car.modelName);
    this.cartService.addToCart(car);
    console.log(car.modelName + " Eklendi")
  }
}
