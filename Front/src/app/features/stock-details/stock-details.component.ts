import { Component, OnInit } from '@angular/core';
import { StockDetailsService } from './stock-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  stockDetailsData:any;
  updateFlag: boolean=false;
  chartProp: any;
  stockName:string = '';
  period:string = 'annual';
  params: string = 'revenue';

  constructor(private service: StockDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //let stockName= this.route.snapshot.params['stockname'];

    this.route.params.subscribe((params)=>{
      this.stockName=params['stockname'];
      this.setStockDetails(params['stockname']);
      this.setStockFinancialData(params['stockname'],this.period,this.params);
    })  
  }


  setStockDetails(stockName:string){
    this.service.getStockDetailsData(stockName).subscribe((res:any)=>{
      this.stockDetailsData=res[0];
    })
  }

  setStockFinancialData(stockName:string, period: string, params: string){
    this.service.getStockFinancialData(stockName,period).subscribe((res:any)=>{
      let data = res.fData.map((item: any) => {
        return item[params];
      });
      let xAxis = res.fData.map((item: any) => {
        return item.period +' '+item.calendarYear;
      });
      
      this.chartProp={
        data: data,
        xAxis: xAxis,
        stockName: stockName
      }
    })

  }

  changePeriod(event: any){
    this.period=event;
    this.setStockFinancialData(this.stockName, event, this.params);
  }

  changeParams(params: string){
    this.params=params;
    this.setStockFinancialData(this.stockName, this.period, this.params);
  }

  



}
