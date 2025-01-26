import { Component, OnInit } from '@angular/core';
import { HorizontalDirection } from 'ag-grid-community';
import { HomePageDataService } from 'src/app/Services/home-page-data.service';

@Component({
  selector: 'app-home-indices',
  templateUrl: './home-indices.component.html',
  styleUrls: ['./home-indices.component.css']
})
export class HomeIndicesComponent implements OnInit {

  indices: any[] = [];

  constructor(private readonly dataService: HomePageDataService) { }

  ngOnInit(): void {
    this.dataService.fetchInitialIndicesData();
    this.dataService.indicesData$.subscribe({
      next: (res)=>{
        this.indices=res.data;
      }
    })
  }

}
