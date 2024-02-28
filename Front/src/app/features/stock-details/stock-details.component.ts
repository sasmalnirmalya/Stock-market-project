import { Component, OnInit } from '@angular/core';
import { StockDetailsService } from './stock-details.service';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { IndexSocketService } from 'src/app/Services/index-socket.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  stockDetailsData:any;
  updateFlag: boolean=false;
  chartRef: Highcharts.Chart | undefined;

  constructor(private service: StockDetailsService, private route: ActivatedRoute, private socketService: IndexSocketService) { }

  ngOnInit(): void {
    let stockName= this.route.snapshot.params['stockname']

    this.service.getStockDetailsData(stockName).subscribe((res:any)=>{
      this.stockDetailsData=res[0];
    })

    this.service.getStockFinancialData(stockName,'').subscribe((res:any)=>{
      let data = res.map((item: any) => {
        return item.revenue;
      });
      let xAxis = res.map((item: any) => {
        return item.period + item.calendarYear;
      });
      this.chartRef?.addSeries({type: 'column', name : stockName , data : data});
      this.chartOptions.xAxis = { categories : xAxis};
      this.updateFlag=true;
    })

  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options
   = {
    series: [],
    title: {
          text: 'Intersetor Comparison'
    },
    // xAxis: {
    //       categories: []
    //   },

}

chartCallback: Highcharts.ChartCallbackFunction = (chart: any) => {
  this.chartRef = chart;
};



}
