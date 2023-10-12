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

import { ModelComponent } from './pages/model/model.component';
import { RentComponent } from './pages/rent/rent.component';
import { CarComponent } from './pages/car/car.component';
import { SharedModule } from './shared/shared.module';
import { CarModule } from './pages/car/car.module';
import { CarProcessModule } from './features/car-process/car-process.module';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ModelComponent,
    RentComponent,
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
    CarModule,
    CarProcessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
