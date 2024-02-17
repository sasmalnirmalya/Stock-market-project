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

  getIndexData(indexName : string, )
  {
    let _url='http://localhost:3000/indices';
    let params = new HttpParams();
    params = params.append('index',indexName);
    return this.http.get(_url,{params: params});
  }

  getNiftyFifty()
  {
    
    let _url=this.baseUrl+'/api/equity-stockIndices?index=NIFTY%2050';
    return this.http.get(_url);
  }

}
