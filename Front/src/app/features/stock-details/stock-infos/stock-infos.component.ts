import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-infos',
  templateUrl: './stock-infos.component.html',
  styleUrls: ['./stock-infos.component.css']
})
export class StockInfosComponent implements OnInit {

  @Input() stockDetailsData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
