import { Component, OnInit } from '@angular/core';
import { HomePageDataService } from 'src/app/Services/home-page-data.service';

@Component({
  selector: 'app-loosers',
  templateUrl: './loosers.component.html',
  styleUrls: ['./loosers.component.css']
})
export class LoosersComponent implements OnInit {

  stocks: any[] = [];
  constructor(private readonly dataService: HomePageDataService) { }

  ngOnInit(): void {
    console.log('looser component created');
    this.dataService.fetchInitialTopLoosersData();

    this.dataService.topLoosersData$.subscribe({
      next: (res) => {
        console.log('Data received:', res);
        this.stocks = res?.data;
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Subscription completed');
      }
    });
  }

  ngOnDestroy(){
    console.log('looser component destroyed')
  }

}
