import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car.component';
import { CarAbstractService } from 'src/app/shared/services/mock-services/abstracts/car-abstract.service';
import { CarMockService } from 'src/app/shared/services/mock-services/concretes/car-mock.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CarComponent],
  exports: [CarComponent],
  imports: [CommonModule, HttpClientModule, FormsModule,ReactiveFormsModule,SharedModule],
  providers: [
    {
      provide: CarAbstractService,
      useClass: CarMockService,
    },
  ],
})
export class CarModule {}
