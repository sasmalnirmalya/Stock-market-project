import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
import { ComparisonService } from './comparison.service';
theme(Highcharts);

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  constructor(private service:ComparisonService) { }

  ngOnInit(): void {
    this.service.getCompareData().subscribe((res:any)=>{
      console.log(res);
    })
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    // chart: {
    //     type: 'column'
    // },
    // title: {
    //     text: 'Column chart with negative values'
    // },
    // xAxis: {
    //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    // },
    // credits: {
    //     enabled: false
    // },
    // plotOptions: {
    //     column: {
    //         borderRadius: '25%'
    //     }
    // },
    series: [{
        type: 'column',
        name: "HDFC Bank",
        data: [57816.66, 53850.54, -51207.61, 41560.27,57816.66, 53850.54, -51207.61, 41560.27]
    }, {
        type:'column',
        name: 'ICICI Bank',
        data: [38762.86,36108.88, 33529.26,28336.74,38762.86,36108.88, 33529.26,28336.74]
    }, {
        type:'column',
        name: 'Kotak Mahindra Bank',
        data: [13183.26, 12007.23,11098.59, 8582.25,13183.26, 12007.23,11098.59, 8582.25]
    }],
    title: {
          text: 'Intersetor Comparison'
    },
    xAxis: {
          categories: ['Rev Jun_23', 'Rev Mar_23', 'Rev Dec_22', 'Rev June_22','Rev Jun_21', 'Rev Mar_21', 'Rev Dec_21', 'Rev June_20']
      },

}



}
