import { Component } from '@angular/core';
import { GetDataService } from 'src/app/get-data.service';

@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent {
  countryName = '';
  countryCapital = '';
  countryRegion = '';
  incomeLevel = '';
  countryLongitude = '';
  countryLatitude = '';
  constructor(private user: GetDataService) {
    console.warn(this.user.getData())
    this.countryName = this.user.getData().name
  }
}
