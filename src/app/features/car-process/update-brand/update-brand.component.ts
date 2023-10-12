import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from 'src/app/shared/services/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css'],
})
export class UpdateBrandComponent implements OnInit {
  brandUpdate: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.updateBrand();
  }

  updateBrand() {
    this.brandUpdate = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  update() {
    if (this.brandUpdate.valid) {
      let brandModel = Object.assign({}, this.brandUpdate.value);
      this.brandService.updateBrand(brandModel).subscribe((response) => {
        this.toastrService.success('Brand Eklendi');
      });
    } else {
      this.toastrService.error('form eksik veya hatalı');
    }
  }
}
