import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartRef: Highcharts.Chart | undefined;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options= {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: [
            'Q1','Q2','Q3','Q4'
        ]
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        type: 'line',
        name: 'Reggane',
        data: [
            1.5,2.5,-2,4
        ]
    }, {
        type: 'column',
        name: 'Tallinn',
        data: [
            0.3,1.4,-1.2,2.5
        ]
    }]
  }

  constructor() { }


  ngOnInit(): void {
  }

}


