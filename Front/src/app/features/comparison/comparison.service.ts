import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.baseUrl;

  _comparisonUrl=this.baseUrl+'/fundamental/compare';
  getCompareData(){
    return this.http.get(this._comparisonUrl);
  }
}
