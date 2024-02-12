import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  standalone: true,
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property:any ={
    "Id":1,
    "Type": "House",
    "Name": "Rabin House",
    "Price": 120000,
  }
  constructor() { }

  ngOnInit() {
  }

}
