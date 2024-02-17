import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockDetailsService {

  constructor(private http: HttpClient) { }

  _url_StockDetailsData='http://localhost:3000/fundamental/stockDetails';
  _url_StockFinancialData='http://localhost:3000/fundamental/financials';

  getStockDetailsData(stockName:string)
  {
    let params = new HttpParams();
    params = params.append('stockName',stockName);
    return this.http.get(this._url_StockDetailsData,{params: params});
  }

  getStockFinancialData( stockName : string, period : string){
    let params = new HttpParams();
    params = params.append('stockName',stockName);
    params = params.append('period',period);
    return this.http.get(this._url_StockFinancialData,{params: params});
  }
}
