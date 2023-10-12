import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/shared/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent implements OnInit {
  brandAdd: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.addBrand();
  }

  addBrand() {
    this.brandAdd = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.brandAdd.valid) {
      let brandModel = Object.assign({}, this.brandAdd.value);
      this.brandService.addBrand(brandModel).subscribe((response) => {
        console.log(response);

        this.toastrService.success('Araç Eklendi');
      });
    } else {
      this.toastrService.error('form eksik veya hatalı');
    }
  }
}
