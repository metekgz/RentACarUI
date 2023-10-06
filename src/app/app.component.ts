import { Component } from '@angular/core';
import { BrandService } from './components/services/brand.service';
import { Brand } from './models/brand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentACar';

}
