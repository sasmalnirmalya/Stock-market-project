import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.css']
})
export class TopPerformersComponent implements OnInit {

  stocks: any[] = [
    {
      name: 'Glenmark',
      price: 855.50,
      change: 78.55,
      PrcntChng: 10.11,
    },
    {
      name: 'Vedanta',
      price: 222.55,
      change: 14.20,
      PrcntChng: 6.82,
    },
    {
      name: 'Sun TV Network',
      price: 612.15,
      change: 32.35,
      PrcntChng: 5.58,
    },
    {
      name: 'Hindalco',
      price: 492.65,
      change: 25.80,
      PrcntChng: 5.33,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
