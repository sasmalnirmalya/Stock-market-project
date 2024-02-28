import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FundamentalChartsService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  getIndexData(indexName : string, )
  {
    let _url=this.baseUrl+'/indices';
    let params = new HttpParams();
    params = params.append('index',indexName);
    return this.http.get(_url,{params: params});
  }

}
