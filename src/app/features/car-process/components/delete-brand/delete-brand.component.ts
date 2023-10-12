import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.css'],
})
export class DeleteBrandComponent implements OnInit {
  brandDelete: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.deleteBrand();
  }

  deleteBrand() {
    this.brandDelete = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  delete() {
    const id = this.brandDelete.get('id').value;
    this.brandService.deleteBrand(id).subscribe((response) => {
      this.toastrService.success('Brand silindi');
      this.modal.close('Close click');
    });
  }
}
