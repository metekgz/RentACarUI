import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css'],
})
export class AddMaintenanceComponent implements OnInit {
  maintenanceAdd: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private maintenanceService: MaintenanceService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    // Otomatik olarak başlangıç tarihini ayarla
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate);

    this.maintenanceAdd = this.formBuilder.group({
      startDate: [formattedDate, Validators.required],
      carId: ['', Validators.required],
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  add() {
    if (this.maintenanceAdd.valid) {
      let maintenanceModel = Object.assign({}, this.maintenanceAdd.value);
      this.maintenanceService
        .addMaintenance(maintenanceModel)
        .subscribe((response) => {
          this.toastrService.success('Maintenance Eklendi');
        });
    } else {
      this.toastrService.error('Form eksik veya hatalı');
    }
  }
}
