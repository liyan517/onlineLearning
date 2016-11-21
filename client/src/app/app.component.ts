import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
  	<app-navigator></app-navigator>
  	<app-slider></app-slider>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
