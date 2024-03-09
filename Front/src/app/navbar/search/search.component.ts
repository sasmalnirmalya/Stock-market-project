import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedCar: string='Search a stock';
  placeHolder: string ='Search a stock'

  stockList:any[]=[];
  constructor(private service: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.service.getStockList().subscribe((res)=>{
      this.stockList=res;
    })
  }

  onChange(){
    if(this.selectedCar)
    this.router.navigate(['/stock-details/' + this.selectedCar]);
  }

}
