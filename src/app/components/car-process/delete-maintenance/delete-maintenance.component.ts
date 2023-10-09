import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-maintenance',
  templateUrl: './delete-maintenance.component.html',
  styleUrls: ['./delete-maintenance.component.css'],
})
export class DeleteMaintenanceComponent implements OnInit {
  maintenanceDelete: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private maintenanceService: MaintenanceService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.deleteMaintenance();
  }

  deleteMaintenance() {
    this.maintenanceDelete = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  delete() {
    const id = this.maintenanceDelete.get('id').value;
    this.maintenanceService.deleteMaintenance(id).subscribe((response) => {
      this.toastrService.success('Maintenance silindi');
      this.modal.close('Close click');
    });
  }
}
