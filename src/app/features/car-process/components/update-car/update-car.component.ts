import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css'],
})
export class UpdateCarComponent implements OnInit {
  carUpdate: FormGroup;
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
      id: ['', Validators.required],
      plate: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
      state: ['', Validators.required],
      modelId: ['', Validators.required],
      carImg: ['', Validators.required],
    });
  }

  update() {
    if (this.carUpdate.valid) {
      let carModel = Object.assign({}, this.carUpdate.value);
      this.carService.updateCar(carModel).subscribe((response) => {
        console.log(response);

        this.toastrService.success('Araç Eklendi');
      });
    } else {
      this.toastrService.error('form eksik veya hatalı');
    }
  }
}
