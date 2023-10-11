import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandComponent } from './pages/brand/brand.component';
import { AddBrandComponent } from './pages/car-process/add-brand/add-brand.component';
import { AddModelComponent } from './pages/car-process/add-model/add-model.component';
import { CarAddComponent } from './pages/car-process/car-add/car-add.component';
import { CarProcessComponent } from './pages/car-process/car-process.component';
import { DeleteBrandComponent } from './pages/car-process/delete-brand/delete-brand.component';
import { DeleteCarComponent } from './pages/car-process/delete-car/delete-car.component';
import { UpdateBrandComponent } from './pages/car-process/update-brand/update-brand.component';
import { UpdateCarComponent } from './pages/car-process/update-car/update-car.component';

import { ModelComponent } from './pages/model/model.component';
import { RentComponent } from './pages/rent/rent.component';
import { CarComponent } from './pages/car/car.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ModelComponent,
    CarAddComponent,
    RentComponent,
    CarProcessComponent,
    DeleteCarComponent,
    UpdateCarComponent,
    AddBrandComponent,
    DeleteBrandComponent,
    UpdateBrandComponent,
    AddModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'rent', component: RentComponent },
    ]),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
