import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from 'src/app/shared/services/car.service';
import { CarAbstractService } from 'src/app/shared/services/mock-services/abstracts/car-abstract.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAdd: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarAbstractService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.createCar();
  }

  createCar() {
    this.carAdd = this.formBuilder.group({
      plate: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
      state: ['', Validators.required],
      modelId: ['', Validators.required],
      carImg: ['', Validators.required],
    });
  }

  add() {
    if (this.carAdd.valid) {
      let carModel = Object.assign({}, this.carAdd.value);
      this.carService.addCar(carModel).subscribe((response) => {
        console.log(response);

        this.toastrService.success('Araç Eklendi');
      });
    } else {
      this.toastrService.error('form eksik veya hatalı');
    }
  }
}
