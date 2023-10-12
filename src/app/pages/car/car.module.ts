import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarMockService } from 'src/app/features/car-process/services/mock-services/concretes/car-mock.service';
import { CarAbstractService } from 'src/app/features/car-process/services/mock-services/abstracts/car-abstract.service';

@NgModule({
  declarations: [CarComponent],
  exports: [CarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
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
export class CarModule {}
