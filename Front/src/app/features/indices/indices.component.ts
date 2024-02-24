import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { Router } from '@angular/router';
import { IndexSocketService } from 'src/app/Services/index-socket.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit, OnDestroy, AfterViewInit {

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
  
  constructor(private router: Router, private socketService : IndexSocketService) {
   }
	ngAfterViewInit(): void {
		this.socketService.sendMessage(this.selectedIndex);

		this.socketService.getMessage().subscribe((res: any) => {
			this.rowData = res.data;
		})
	}

	ngOnDestroy(): void {
		this.socketService.disconnect();
	}

  ngOnInit(): void {

	
	
  }

  public columnDefs: ColDef[] = [
		{ 
			headerName: 'SYMBOL', 
			field: 'symbol',
			width: 120, 
			headerTooltip: 'name'
		},
		{ 
			headerName: 'OPEN', 
			field: 'open',
			width: 120 , 
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
			cellStyle : {
				'text-align': 'right'
			}
		},
		{ 
			headerName: 'HIGH' , 
			field: 'dayHigh',
			width: 120 , 
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
			cellStyle : {
				'text-align': 'right'
			}
		},
		{ 
			headerName: 'LOW', 
			field: 'dayLow',
			width: 120, 
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
			cellStyle : {
				'text-align': 'right'
			}
		},
		{ 
			headerName: 'PREV. CLOSE', 
			field: 'previousClose',
			width: 120 , 
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
			cellStyle : {
				'text-align': 'right'
			}
		},
		{ 
			headerName: 'LTP', 
			field: 'price',
			width: 120 , 
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
			cellStyle : {
				'text-align': 'right'
			}
		},
		{ 
			headerName: 'CHANGE', 
			field: 'change',
			width: 120,
			cellStyle: params => {
				if (params.value <0) {
					return {color: '#FF005C', backgroundColor: '#FF005C30', 'text-align': 'right'};
				}
				return {color: '#46E372', backgroundColor: '#46E3721A' , 'text-align': 'right'};
				
			},
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
		},
		{ 
			headerName: '% CHANGE', field: 'changesPercentage',width: 120,
			cellStyle: params => {
				if (params.value <0) {
					return {color: '#FF005C', backgroundColor: '#FF005C30', 'text-align': 'right'};
				}
				return {color: '#46E372', backgroundColor: '#46E3721A' , 'text-align': 'right'};
				
			},
			valueFormatter : (params)=>{
				return Number(params.value).toFixed(2);
			},
		},
		{ 
			headerName: 'VOLUME(shares)', 
			field: 'volume',
			width: 120, 
			valueParser: params => Number(params.newValue),
			cellStyle : {
				'text-align': 'right'
			}
		},
	];
	
	defaultColDef = {
		resizable: true,
		sortable: true
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
	}	


}
