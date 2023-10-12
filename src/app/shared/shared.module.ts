import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { TotalPricePipe } from './pipes/total-price.pipe';
import { BrandService } from '../features/car-process/services/brand.service';
import { CarService } from '../features/car-process/services/car.service';
import { MaintenanceService } from '../features/car-process/services/maintenance.service';
import { BrandMockService } from '../features/car-process/services/mock-services/concretes/brand-mock.service';
import { CarMockService } from '../features/car-process/services/mock-services/concretes/car-mock.service';

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
