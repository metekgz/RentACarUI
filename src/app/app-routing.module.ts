import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { RentComponent } from './components/rent/rent.component';
import { CarProcessComponent } from './components/car-process/car-process.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brandId/:id', component: CarComponent },
  { path: 'rent', component: RentComponent },
  { path: 'cars/process', component: CarProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
