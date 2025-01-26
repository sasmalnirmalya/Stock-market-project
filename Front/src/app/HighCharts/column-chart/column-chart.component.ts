import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IndexSocketService } from 'src/app/Services/index-socket.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit, OnChanges, OnDestroy {

  @Input() chartProp: any;
  chartRef: Highcharts.Chart | undefined;
  updateFlag = false;
  isHighcharts = false
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options
    = {
      series: [],
      title: {
        text: 'Revenue'
      },

    }
  constructor() { 
  }
  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['chartProp']?.currentValue){
      this.chartOptions.series= [{
        type: 'column',
        data: this.chartProp.data.reverse(),
      }];
      this.chartOptions.xAxis = { categories: this.chartProp.xAxis.reverse() };
      this.chartOptions.title= {text: this.chartProp.parameter}
      this.updateFlag = true;
      this.isHighcharts=true;
    }  
  }

  ngOnInit(): void {
  }

  

  chartCallback: Highcharts.ChartCallbackFunction = (chart: any) => {
    this.chartRef = chart;
  };

}


