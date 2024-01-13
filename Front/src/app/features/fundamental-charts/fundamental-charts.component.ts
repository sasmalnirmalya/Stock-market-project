import { Component, OnInit } from '@angular/core';
import { FundamentalChartsService } from './fundamental-charts.service';
import { CanvasJS } from '@canvasjs/angular-stockcharts';
import { pieChartInterface } from 'src/app/Interfaces/chart-interfaces';
//import {MatCardModule} from '@angular/material/card';
import { Observable } from 'rxjs';



@Component({
	selector: 'app-fundamental-charts',
	templateUrl: './fundamental-charts.component.html',
	styleUrls: ['./fundamental-charts.component.css']
})
export class FundamentalChartsComponent implements OnInit {

	rowData!: any;
	dataP: pieChartInterface[] = [];
	chart: any;
	chartOptions = {
		animationEnabled: true,
		theme: "dark2",
		title: {
			text: "Market share"
		},
		data: [{
			type: "pie",
			startAngle: -90,
			indexLabel: "{company}: {y}",
			yValueFormatString: "#,###.##'%'",
			dataPoints: [{ y: 14.1, company: "Toys" },
						{ y: 28.2, company: "Electronics" },
						{ y: 14.4, company: "Groceries" },
						{ y: 43.3, company: "Furniture" }]
		}]
	}

	
	
	
	constructor(private FndmntlChrtSrvc: FundamentalChartsService) {
		
	}

	ngOnInit(): void {
		this.FndmntlChrtSrvc.getBarGraphData().subscribe((res: any) => {
			this.dataP = res.map((x: {
				company: any; market_cap: any;
			}) => {
				return {
					y: x.market_cap,
					company: x.company
				}
			})

			this.chartOptions.data[0].dataPoints=this.dataModifier(this.dataP);
			this.chart.render()

		});

		this.FndmntlChrtSrvc.getAllStockInfo().subscribe((res:any)=>{
			console.log(res)
			//this.rowData=res;
			console.log(this.rowData)
		});

		
		

	}

	getChartInstance(chart: object) {
		this.chart = chart;
	}

	dataModifier(data:any[]){
		let total=0;
		data.forEach((item)=>{
			total+=item.y;
		})

		data.forEach((item)=>{
			item.y=(item.y/total)*100;
		})

		let modifiedData=data.splice(0,5);
		let subTotal=0;
		modifiedData.forEach((x)=>{
			subTotal+=x.y;
		})
		modifiedData.push({company:'Others',y:100-subTotal})
		return modifiedData;

	}


}
