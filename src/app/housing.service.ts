import { Injectable } from '@angular/core';
import { House } from './house';  // interface for a house
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocations: House[] = [{
      id:"1",
      title:"House 01",
      address:"1,2",
      image:"house01.jpg"
    }, {
      id:"2",
      title:"House 02",
      address:"1,2",
      image:"house02.jpg"
    }, {
      id:"3",
      title:"House 03",
      address:"1,2",
      image:"house03.jpg"
    }, {
      id:"4",
      title:"House 04",
      address:"1,2",
      image:"house04.jpg"
    }, {
      id:"5",
      title:"House 05",
      address:"1,2",
      image:"house05.jpg"
  }];  //housingLocations contains an array of the houses
  constructor() { 

  }

  getAllHousingLocations(): House[] {
    return this.housingLocations;
  }

  getHousingLocationById(id:any): House | undefined{
    return this.housingLocations.find(house => house.id === id);
  }
}
