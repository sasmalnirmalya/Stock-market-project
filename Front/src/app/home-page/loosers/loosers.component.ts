import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loosers',
  templateUrl: './loosers.component.html',
  styleUrls: ['./loosers.component.css']
})
export class LoosersComponent implements OnInit {

  stocks: any[] = [
    {
      name: 'Navin Fluorine',
      price: 3766.70,
      change: -590.95,
      PrcntChng: -13.56,
    },
    {
      name: 'Adani Enterprise',
      price: 2413.90,
      change: 61.35,
      PrcntChng: -2.48,
    },
    {
      name: 'MCX India',
      price: 2049.70,
      change: 46.85,
      PrcntChng: -2.23,
    },
    {
      name: 'Balrampur Chini',
      price: 436.80,
      change: 7.10,
      PrcntChng: -1.60,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
