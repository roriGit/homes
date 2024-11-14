import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
houseid: any;

  constructor(private currentRoute:ActivatedRoute){
      console.log(currentRoute)
  }

  ngOnInit(){
    this.currentRoute.params.subscribe(houseParams => {
        this.houseid = houseParams['id']
    })
  }
}
