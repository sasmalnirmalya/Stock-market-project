import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  stockId: string='Search a stock';
  placeHolder: string ='Search a stock';
  searchText:string='';
  isSearchFocused:boolean=false;

  stockList:any[]=[];
  options:any[]=[];
  constructor(private readonly service: SearchService, private readonly router: Router) { }

  ngOnInit(): void {
    this.service.getStockList().subscribe((res)=>{
      this.stockList=res;
      this.setOptions();
    })
  }

  onChange(stockId:string,stockName:string){
    this.isSearchFocused=false;
    this.searchText=stockName;
    this.stockId=stockId;
    if(this.searchText)
    this.router.navigate(['/stock-details/' + this.stockId]);
    
  }

  timer:any;

  onSearchTextChange(){
    clearTimeout(this.timer);
    this.timer=setTimeout(this.setOptions.bind(this),300);
  }

  setOptions(){
    this.options = this.stockList.filter((item)=>{
      return item.name.includes(this.searchText)
    })
  }

  onFocusOut(event: FocusEvent) {
    // Check if focus is lost to an element inside the dropdown
    const target = event.relatedTarget as HTMLElement;
    const isInsideDropdown =
      target && target.closest('.search-option-block') !== null;
  
    if (!isInsideDropdown) {
      this.isSearchFocused = false;
    }
  }

  onClickOutside(event:any) {
    if(event){
      this.isSearchFocused = false;
    }
  }


}
