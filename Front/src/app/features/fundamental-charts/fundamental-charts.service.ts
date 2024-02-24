import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class FundamentalChartsService {

  constructor(private http: HttpClient) { }

  getIndexData(indexName : string, )
  {
    let _url='http://localhost:3000/indices';
    let params = new HttpParams();
    params = params.append('index',indexName);
    return this.http.get(_url,{params: params});
  }

}
