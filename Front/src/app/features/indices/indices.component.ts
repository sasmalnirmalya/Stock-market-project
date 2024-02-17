import { Component, OnInit } from '@angular/core';
import { ColDef, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { FundamentalChartsService } from '../fundamental-charts/fundamental-charts.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { IndexSocketService } from 'src/app/Services/index-socket.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {

  rowData:any=[];
  pinnedTopRowData:any=[];
  selectedIndexType: string= 'BMI';
  
  selectedIndex: string = 'NIFTY50';

  indexType: any[]=[ { displayName : 'BROAD MARKET INDICES', value : 'BMI'}, { displayName : 'SECTORAL INDICES' , value : 'SEC'}];

  broadMarketIndex: any[]= [ 
	{displayName :'NIFTY 50', value : 'NIFTY50'},
    {displayName : 'NIFTY NEXT 50', value : 'NIFTYNEXT50'},
	{displayName : 'NIFTY MIDCAP 50', value : 'NIFTYMIDCAP50'}
  ];

  sectoralIndices: any[]=[
	{displayName :'NIFTY AUTO', value : 'NIFTYAUTO'},
	{displayName :'NIFTY BANK', value : 'NIFTYBANK'},
	{displayName :'NIFTY ENERGY', value : 'NIFTYENERGY'},
	{displayName :'NIFTY OIL & GAS', value : 'NIFTYOILGAS'}
  ];

  selectedIndexTypeOptions: any[]=this.broadMarketIndex;
  
  constructor(private FndmntlChrtSrvc: FundamentalChartsService, private router: Router, private socketService : IndexSocketService) {
   }

  ngOnInit(): void {
	// this.FndmntlChrtSrvc.getIndexData('NIFTY50').subscribe((res:any)=>{
	// 	this.rowData=res.data;
	// });
	this.socketService.sendMessage(this.selectedIndex);

	this.socketService.getMessage().subscribe((res : any)=>{
		this.rowData=res.data;
	  })
	
	
  }

  public columnDefs: ColDef[] = [
		{ headerName: 'SYMBOL', field: 'symbol',width: 120, headerTooltip: 'name' },
		{ headerName: 'OPEN', field: 'open',width: 120},
		{ headerName: 'HIGH' , field: 'dayHigh',width: 120},
		{ headerName: 'LOW', field: 'dayLow',width: 120},
		{ headerName: 'PREV. CLOSE', field: 'previousClose',width: 120},
		{ headerName: 'LTP', field: 'price',width: 120},
		{ 
			headerName: 'CHANGE', field: 'change',width: 120,
			cellStyle: params => {
				if (params.value <0) {
					return {color: '#FF005C', backgroundColor: '#FF005C30'};
				}
				return {color: '#46E372', backgroundColor: '#46E3721A'};
				
			}
		},
		{ 
			headerName: '% CHANGE', field: 'changesPercentage',width: 120,
			cellStyle: params => {
				if (params.value <0) {
					return {color: '#FF005C', backgroundColor: '#FF005C30'};
				}
				return {color: '#46E372', backgroundColor: '#46E3721A'};
				
			}
		},
		{ headerName: 'VOLUME(shares)', field: 'volume',width: 120},

	];
	
	defaultColDef = {
		resizable: true,
	};

  getContextMenuItems=(
		params: GetContextMenuItemsParams
	): (string | MenuItemDef)[] => {

		var result: (string | MenuItemDef)[]=[
			{
				name:'Console log params',
				action: ()=>{
					this.router.navigate(['/stock-details/'+params.value]);
					console.log(params)
				}
			}
		];
		return result;
	}

	onTypeChange(){
		if (this.selectedIndexType=='BMI'){
			this.selectedIndexTypeOptions = this.broadMarketIndex;
		}
		else if ( this.selectedIndexType == 'SEC'){
			this.selectedIndexTypeOptions = this.sectoralIndices;
		}

		this.selectedIndex= this.selectedIndexTypeOptions[0].value;
		this.onIndexChange();
	}

	onIndexChange(){
		this.socketService.sendMessage(this.selectedIndex);
		// this.FndmntlChrtSrvc.getIndexData(this.selectedIndex).subscribe((res:any)=>{
		// 	this.rowData=res.data;
		// })
	}


}
