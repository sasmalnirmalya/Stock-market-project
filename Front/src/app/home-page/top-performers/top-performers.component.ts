import { Component, OnInit } from '@angular/core';
import { HomePageDataService } from 'src/app/Services/home-page-data.service';

@Component({
  selector: 'app-top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.css']
})
export class TopPerformersComponent implements OnInit {

  stocks: any[] = [];
  constructor(private readonly dataService: HomePageDataService) { }
  
  ngOnInit(): void {
    console.log('top performer component created');
    this.dataService.fetchInitialTopGainersData();

    this.dataService.topGainersData$.subscribe({
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




  

}
