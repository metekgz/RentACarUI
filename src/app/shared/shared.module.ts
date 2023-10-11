import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { RouterModule } from '@angular/router';
import { CarService } from './services/car.service';
import { BrandService } from './services/brand.service';
import { MaintenanceService } from './services/maintenance.service';
import { CarMockService } from './services/mock-services/concretes/car-mock.service';
import { BrandMockService } from './services/mock-services/concretes/brand-mock.service';
import { FilterPipe } from './pipes/filter.pipe';
import { TotalPricePipe } from './pipes/total-price.pipe';

@NgModule({
  declarations: [NaviComponent, FilterPipe, TotalPricePipe],
  imports: [CommonModule, RouterModule],
  exports: [NaviComponent, FilterPipe, TotalPricePipe],
  providers: [
    CarService,
    BrandService,
    MaintenanceService,
    BrandMockService,
    CarMockService,
  ],
})
export class SharedModule {}
