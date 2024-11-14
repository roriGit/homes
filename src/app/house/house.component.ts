import { Component, Input } from '@angular/core';
import { House } from '../house';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-house',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent {

  @Input() houseInfo!:House 

}
