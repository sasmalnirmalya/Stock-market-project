import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-details-link',
  templateUrl: './details-link.component.html',
  styleUrls: ['./details-link.component.css']
})
export class DetailsLinkComponent implements ICellRendererAngularComp {

  params: any;
  
  constructor() { }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  agInit(params: any): void {
    this.params = params;
  }

  loadDetailsPage(){
    this.params.context.navigateToDetailsPage(this.params.value);
  }

}
