import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css'],
})
export class UpdateCarComponent implements OnInit {
  carUpdate: FormGroup;
  car: Car;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.updateCar();
  }

  updateCar() {
    this.carUpdate = this.formBuilder.group({
      id: [this.car.id, Validators.required],
      plate: [this.car.plate, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      state: [this.car.state, Validators.required],
      modelId: [this.car.modelId, Validators.required],
      carImg: [this.car.imageUrl, Validators.required],
    });
  }

  update() {
    if (this.carUpdate.valid) {
      let carModel = Object.assign({}, this.carUpdate.value);
      this.carService.updateCar(carModel).subscribe((response) => {
        console.log(response);
        this.toastrService.success('Araç güncellendi');
      });
    } else {
      this.toastrService.error('Form eksik veya hatalı');
    }
  }
}
