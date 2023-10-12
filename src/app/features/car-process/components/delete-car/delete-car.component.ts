import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car'; // Car modelini içe aktarıyoruz

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css'],
})
export class DeleteCarComponent implements OnInit {
  carDelete: FormGroup;
  car: Car; // Aracı saklayacak değişken

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.deleteCar();
  }

  deleteCar() {
    this.carDelete = this.formBuilder.group({
      id: [this.car.id, Validators.required],
    });
  }

  delete() {
    const id = this.carDelete.get('id').value;
    this.carService.deleteCar(id).subscribe((response) => {
      this.toastrService.success('Araç silindi');
      this.modal.close('Close click');
    });
  }
}
