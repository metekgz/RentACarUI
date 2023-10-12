import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarProcessComponent } from './components/car-process/car-process.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { CarAddComponent } from './components/add-car/car-add.component';
import { AddModelComponent } from './components/add-model/add-model.component';
import { DeleteBrandComponent } from './components/delete-brand/delete-brand.component';
import { DeleteCarComponent } from './components/delete-car/delete-car.component';
import { UpdateBrandComponent } from './components/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { CarAbstractService } from './services/mock-services/abstracts/car-abstract.service';
import { CarMockService } from './services/mock-services/concretes/car-mock.service';

@NgModule({
  declarations: [
    CarProcessComponent,
    DeleteCarComponent,
    UpdateCarComponent,
    AddBrandComponent,
    DeleteBrandComponent,
    UpdateBrandComponent,
    CarAddComponent,
    AddModelComponent,
  ],
  exports: [CarProcessComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: CarAbstractService,
      useClass: CarMockService,
    },
  ],
})
export class CarProcessModule {}
