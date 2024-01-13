import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  constructor(private http:HttpClient) { }

  _comparisonUrl='http://localhost:3000/fundamental/compare';
  getCompareData(){
    return this.http.get(this._comparisonUrl);
  }
}
