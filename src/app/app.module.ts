import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ModelComponent } from './components/model/model.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './components/car/car.component';
import { TotalPricePipe } from './pipes/total-price.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CarAddComponent } from './components/car-process/car-add/car-add.component';
import { RentComponent } from './components/rent/rent.component'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarProcessComponent } from './components/car-process/car-process.component';
import { DeleteCarComponent } from './components/car-process/delete-car/delete-car.component';
import { UpdateCarComponent } from './components/car-process/update-car/update-car.component';
import { AddBrandComponent } from './components/car-process/add-brand/add-brand.component';
import { DeleteBrandComponent } from './components/car-process/delete-brand/delete-brand.component';
import { UpdateBrandComponent } from './components/car-process/update-brand/update-brand.component';
import { AddModelComponent } from './components/car-process/add-model/add-model.component';
import { AddMaintenanceComponent } from './components/car-process/add-maintenance/add-maintenance.component';
import { UpdateMaintenanceComponent } from './components/car-process/update-maintenance/update-maintenance.component';
import { DeleteMaintenanceComponent } from './components/car-process/delete-maintenance/delete-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    ModelComponent,
    TotalPricePipe,
    FilterPipe,
    CartSummaryComponent,
    CarAddComponent,
    RentComponent,
    CarProcessComponent,
    DeleteCarComponent,
    UpdateCarComponent,
    AddBrandComponent,
    DeleteBrandComponent,
    UpdateBrandComponent,
    AddModelComponent,
    AddMaintenanceComponent,
    UpdateMaintenanceComponent,
    DeleteMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
