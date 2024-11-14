import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig) // Add your routing module here
    // Add other providers as necessary
  ]
})
.catch(err => console.error(err));
