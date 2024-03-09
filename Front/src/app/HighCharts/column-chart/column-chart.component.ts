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
        text: 'Intersetor Comparison'
      },

    }
  constructor() { 
  }
  ngOnDestroy(): void {
    console.log('destroyed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.chartRef?.addSeries({ type: 'column', name: this.chartProp.stockName, data: this.chartProp.data.reverse() });
    if( changes['chartProp'] && changes['chartProp'].currentValue){
      this.chartOptions.series= [{
        type: 'column',
        data: this.chartProp.data.reverse(),
      }];
      this.chartOptions.xAxis = { categories: this.chartProp.xAxis.reverse() };
      this.updateFlag = true;
      this.isHighcharts=true;
    }  
  }

  ngOnInit(): void {
    console.log('initiated');
  }

  

  chartCallback: Highcharts.ChartCallbackFunction = (chart: any) => {
    this.chartRef = chart;
  };

}


