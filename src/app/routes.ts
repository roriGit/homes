import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HousesComponent } from "./houses/houses.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
    path:"", component:HousesComponent,
    }, 
    {
        path:"about", component:AboutComponent,
    }, 
    {
        path:"details/:id", component:DetailsComponent,
    }
];

export default routeConfig;