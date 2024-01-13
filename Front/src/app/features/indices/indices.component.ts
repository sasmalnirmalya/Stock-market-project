import { Component, OnInit } from '@angular/core';
import { ColDef, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { FundamentalChartsService } from '../fundamental-charts/fundamental-charts.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {

  rowData:any=[];
  pinnedTopRowData:any=[];
  yourDataArray = [
	{
		name: 'NIFTY 50',
		code: 'N50'
	},
	{
		name: 'SENSEX',
		code: 'SX'
	}
  ]; // Your array of items
  selectedItems = []; // Selected items array
  dropdownSettings:IDropdownSettings = {
	singleSelection: true,
	idField: 'code',
	textField: 'name',
  };

  constructor(private FndmntlChrtSrvc: FundamentalChartsService) {
   }

  ngOnInit(): void {
	this.FndmntlChrtSrvc.getNiftyFiftyData().subscribe((res:any)=>{
		this.rowData=res.data;
		this.pinnedTopRowData=[this.rowData[0]];
		this.rowData.shift();
	})

	this.FndmntlChrtSrvc.getNiftyFifty().subscribe((res:any)=>{
		console.log(res)
	})
  }

  public columnDefs: ColDef[] = [
		{ headerName: 'SYMBOL', field: 'SYMBOL',width: 120},
		{ headerName: 'OPEN', field: 'OPEN',width: 120},
		{ headerName: 'HIGH' , field: 'HIGH',width: 120},
		{ headerName: 'LOW', field: 'LOW',width: 120},
		{ headerName: 'PREV. CLOSE', field: 'PREV. CLOSE',width: 120},
		{ headerName: 'LTP', field: 'LTP',width: 120},
		{ 
			headerName: 'CHANGE', field: 'CHNG',width: 120,
			cellStyle: params => {
				if (params.value <0) {
					return {color: '#FF005C', backgroundColor: '#FF005C30'};
				}
				return {color: '#46E372', backgroundColor: '#46E3721A'};
				
			}
		},
		{ 
			headerName: '% CHANGE', field: '%CHNG',width: 120,
			cellStyle: params => {
				if (params.value <0) {
					return {color: '#FF005C', backgroundColor: '#FF005C30'};
				}
				return {color: '#46E372', backgroundColor: '#46E3721A'};
				
			}
		},
		{ headerName: 'VOLUME(shares)', field: 'VOLUME (shares)',width: 120},

	];
	
	defaultColDef = {
		resizable: true,
	};

  getContextMenuItems(
		params: GetContextMenuItemsParams
	): (string | MenuItemDef)[]{
		var result: (string | MenuItemDef)[]=[
			{
				name:'Console log params',
				action: ()=>{
					console.log(params)
				}
			}
		];
		return result;
	}


}
