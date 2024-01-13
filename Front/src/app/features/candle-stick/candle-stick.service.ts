import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandleStickService {

  constructor(private http: HttpClient) { }
  

  getCandleStickData(stockCode: string)
  {
    let url='http://api.marketstack.com/v1/eod?access_key=269690d2da09c1c292f8f12c73f94335&symbols=TATAPOWER.XBOM';
    return this.http.get(url)
  }
}
