import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit{

  url='https://fmpcloud.io/api/v3/stock/list?apikey=75d50292cad61f6ffdb1b26a7d670506';
  _nseUrl="https://www.nseindia.com/api/allIndices";

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    console.log('here');
    this.http.get(this._nseUrl).subscribe((res)=>{
      console.log(res);
    })
  }

  getStockList(){
    this.http.get(this._nseUrl).subscribe((res)=>{
      console.log(res);
    })
    return this.http.get(this.url)
    .pipe(
      map((items:any) => {
        return items.filter((item: { exchangeShortName: string; }) => item.exchangeShortName === 'NSE')}));
  }
}
