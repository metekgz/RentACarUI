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
  startDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private maintenanceService: MaintenanceService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.startDate = new Date();
    this.addMaintenance();
  }

  addMaintenance() {
    this.maintenanceAdd = this.formBuilder.group({
      startDate: [this.startDate, Validators.required],
      carId: ['', Validators.required],
    });
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
