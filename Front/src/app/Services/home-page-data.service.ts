import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, interval, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageDataService implements OnInit {

  baseUrl = environment.baseUrl;
  indicesUrl= this.baseUrl+'/indices';
  topGainersUrl= this.baseUrl+'/indices/topGainers';
  topLoosersUrl= this.baseUrl+'/indices/topLoosers';

  constructor(private readonly http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  indicesData = new BehaviorSubject<any>(null);
  indicesData$ = this.indicesData.asObservable();

  topGainersData = new BehaviorSubject<any> (null);
  topGainersData$ = this.topGainersData.asObservable();

  topLoosersData = new BehaviorSubject<any> (null);
  topLoosersData$ = this.topLoosersData.asObservable();

  fetchInitialIndicesData() {
    this.http.get(this.indicesUrl).subscribe({
      next: (response) => {
        this.indicesData.next(response);
        this.fetchIndicesDataPeriodically();
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  fetchIndicesDataPeriodically() {
    // Call the API every 30 minutes (30 * 60 * 1000 ms)
    interval(5* 1000)
      .pipe(
        switchMap(() => this.http.get(this.indicesUrl))
      )
      .subscribe({
        next: (response) => {
          this.indicesData.next(response); // Emit new data to all subscribers
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
  }

  fetchInitialTopGainersData() {
    this.http.get(this.topGainersUrl).subscribe({
      next: (response) => {
        this.topGainersData.next(response);
        this.fetchTopGainersDataPeriodically();
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  fetchInitialTopLoosersData() {
    this.http.get(this.topLoosersUrl).subscribe({
      next: (response) => {
        this.topLoosersData.next(response);
        this.fetchTopLoosersDataPeriodically();
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      },
    });
  }

  fetchTopGainersDataPeriodically() {
    interval(15* 60 * 1000)
      .pipe(
        switchMap(() => this.http.get(this.topGainersUrl))
      )
      .subscribe({
        next: (response) => {
          this.topGainersData.next(response); 
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
  }

  fetchTopLoosersDataPeriodically() {
    interval(15* 60 * 1000)
      .pipe(
        switchMap(() => this.http.get(this.topLoosersUrl))
      )
      .subscribe({
        next: (response) => {
          this.topLoosersData.next(response); 
        },
        error: (err) => {
          console.error('Error fetching data:', err);
        },
      });
  }

}
