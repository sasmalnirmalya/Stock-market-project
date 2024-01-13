import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-indices',
  templateUrl: './home-indices.component.html',
  styleUrls: ['./home-indices.component.css']
})
export class HomeIndicesComponent implements OnInit {

  indices: any[] = [
    {
      index: 'Nifty 50',
      price: 19638.30,
      change: 114.80,
      PrcntChng: 0.59,
    },
    {
      index: 'BSE Sensex',
      price: 65828.41,
      change: 320.09,
      PrcntChng: 0.49,
    },
    {
      index: 'Nifty Bank',
      price: 44584.55,
      change: 283.60,
      PrcntChng: 0.64,
    },
    {
      index: 'Nifty IT',
      price: 31748.40,
      change: -95.20,
      PrcntChng: -0.30,
    },
    {
      index: 'BSE Tech',
      price: 14470.90,
      change: -11.20,
      PrcntChng: -0.08,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
