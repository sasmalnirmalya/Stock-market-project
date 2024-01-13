import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FundamentalChartsService {

  constructor(private http: HttpClient) { }

  baseUrl='https://www.nseindia.com';


  getBarGraphData()
  {
    let _url='http://localhost:3000/fundamental/marketCap';
    return this.http.get(_url)

  }

  getAllStockInfo(){
    let _url='http://localhost:3000/stocklist';
    return this.http.get(_url)
  }

  getNiftyFiftyData()
  {
    let _url='http://localhost:3000/index/nifty-50';
    return this.http.get(_url);
  }

  getNiftyFifty()
  {
    
    let _url=this.baseUrl+'/api/equity-stockIndices?index=NIFTY%2050';
    return this.http.get(_url);
  }

}
