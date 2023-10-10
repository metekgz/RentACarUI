import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-maintenance',
  templateUrl: './update-maintenance.component.html',
  styleUrls: ['./update-maintenance.component.css'],
})
export class UpdateMaintenanceComponent implements OnInit {
  maintenanceUpdate: FormGroup;
  returnDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private maintenanceService: MaintenanceService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);

    this.maintenanceUpdate = this.formBuilder.group({
      id: ['', Validators.required],
      carId: ['', Validators.required],
      returnDate: [formattedDate, Validators.required],
    });
  }

  update() {
    if (this.maintenanceUpdate.valid) {
      let maintenanceModel = Object.assign({}, this.maintenanceUpdate.value);
      this.maintenanceService
        .updateMaintenance(maintenanceModel)
        .subscribe((response) => {
          this.toastrService.success('Maintenance Güncellendi');
        });
    } else {
      this.toastrService.error('form eksik veya hatalı');
    }
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}