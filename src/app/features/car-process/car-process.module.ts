import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarAbstractService } from 'src/app/shared/services/mock-services/abstracts/car-abstract.service';
import { CarMockService } from 'src/app/shared/services/mock-services/concretes/car-mock.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarProcessComponent } from './car-process.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddModelComponent } from './add-model/add-model.component';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { CarAddComponent } from './add-car/car-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CarProcessComponent,
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
    SharedModule,
  ],
  providers: [
    {
      provide: CarAbstractService,
      useClass: CarMockService,
    },
  ],
})
export class CarProcessModule {}
