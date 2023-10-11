import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandMockService } from 'src/app/shared/services/mock-services/concretes/brand-mock.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  constructor(private brandMockService:BrandMockService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandMockService.getBrands().subscribe((response) => {
      this.brands = response;
    });
  }

  clickBrand(brand: Brand | null) {
    this.currentBrand = brand;
  }

  getCurrentBrand(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllBrands() {
    if (!this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
