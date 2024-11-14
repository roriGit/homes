import { Component, inject, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { HouseComponent } from "../house/house.component";
import { House } from '../house';
import { FormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [HeaderComponent, HouseComponent, NgFor, FormsModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss'
})
export class HousesComponent {
  searchHouses?:any = "";
  houses:House[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.houses = this.housingService.getAllHousingLocations()
  }
  searchHouse() {
    console.log(this.searchHouses)
  }
  
}
