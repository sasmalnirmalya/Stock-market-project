import { Component, OnInit } from '@angular/core';
import { CandleStickService } from './candle-stick.service';
import { JsonData } from 'src/app/Interfaces/chart-interfaces';





@Component({
  selector: 'app-candle-stick',
  templateUrl: './candle-stick.component.html',
  styleUrls: ['./candle-stick.component.css']
})
export class CandleStickComponent implements OnInit {

  constructor(private candleStick: CandleStickService) { 
    
  }

  jsonData: JsonData[]=[];
  dps1: any = [];
  dps2: any = [];
  
  stockChartOptions = {
    exportEnabled: true,
      theme: "light2",
      title: {
        text: "Angular StockChart with Date-Time Axis"
      },
      charts: [{
        axisY: {
          title: "Bitcoin Price",
          prefix: "$",
          tickLength: 0
        },
        data: [{
          type: "candlestick",
          name: "Price (in USD)",
          yValueFormatString: "$#,###.##",
          dataPoints: this.dps1
      }]
    }],
    navigator: {
      data: [{
        dataPoints: this.dps2
      }],
      slider: {
        minimum: new Date(2018, 2, 1),
        maximum: new Date(2018, 9, 31)
      }
    }
  }		
  
 
  ngOnInit(){
  //   this.candleStick.getCandleStickData('AAPL').subscribe((response)=>{
  //     console.log(response)
  //   })
  //   for(var i = 0; i < this.jsonData.length; i++) {
  //     this.dps1.push({ x: new Date(this.jsonData[i].date), y: [Number(this.jsonData[i].open), Number(this.jsonData[i].high), Number(this.jsonData[i].low), Number(this.jsonData[i].close)] });
  //     this.dps2.push({ x: new Date(this.jsonData[i].date), y: Number(this.jsonData[i].close) });
  //   }
  }

}
