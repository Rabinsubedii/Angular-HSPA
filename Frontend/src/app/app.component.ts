import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponentComponent,PropertyListComponent,PropertyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
