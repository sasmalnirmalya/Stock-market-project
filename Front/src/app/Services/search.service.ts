import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url='https://fmpcloud.io/api/v3/stock/list?apikey=75d50292cad61f6ffdb1b26a7d670506';

  constructor(private http:HttpClient) { }

  getStockList(){
    return this.http.get(this.url)
    .pipe(
      map((items:any) => {
        return items.filter((item: { exchangeShortName: string; }) => item.exchangeShortName === 'NSE')}));
  }
}
