import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { DetailsLinkComponent } from 'src/app/CellRenderers/details-link/details-link.component';

@Component({
  selector: 'app-ag-grid-index',
  templateUrl: './ag-grid-index.component.html',
  styleUrls: ['./ag-grid-index.component.css']
})
export class AgGridIndexComponent implements OnInit, OnChanges {

  rowData: any = [];
  pinnedTopRowData: any = [];
  gridApi: any;
  visibleRows: any
  sideBar: any ={
    defaultToolPanel:'',
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel : 'agColumnsToolPanel'
      }
    ]
  }

  @Input() data: any


  constructor(private router: Router,) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.gridApi) {
      this.visibleRows = this.gridApi.getRenderedNodes().map((node: any) => node.rowIndex);
      // console.log(this.visibleRows)
    }

    this.rowData = this.data;

    if (this.gridApi && this.visibleRows.length > 0) {
      const lastVisibleRowIndex = Math.max(...this.visibleRows);
      // console.log(lastVisibleRowIndex)
      this.gridApi.ensureIndexVisible(15, 'top');
    }
  }

  ngOnInit(): void {
    // let scrolRange = this.api.getVerticalPixelRange();
    // console.log(scrolRange);
    // this.rowData = this.data;
    // this.api.ensureIndexVisible(scrolRange);
  }



  public columnDefs: ColDef[] = [
    {
      headerName: 'SYMBOL',
      field: 'symbol',
      width: 120,
      headerTooltip: 'name',
      cellRenderer: DetailsLinkComponent
    },
    {
      headerName: 'VOLUME(shares)',
      field: 'volume',
      width: 120,
      valueParser: params => Number(params.newValue),
      cellStyle: {
        'text-align': 'right',
        'height' : '100px'
      }
    },
    {
      headerName: 'LTP',
      field: 'price',
      width: 120,
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
      cellStyle: {
        'text-align': 'right'
      }
    },
    {
      headerName: 'CHANGE',
      field: 'change',
      width: 120,
      cellStyle: params => {
        if (params.value < 0) {
          return { color: '#FF005C', backgroundColor: '#FF005C30', 'text-align': 'right' };
        }
        return { color: '#46E372', backgroundColor: '#46E3721A', 'text-align': 'right' };

      },
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
    },
    {
      headerName: '% CHANGE', field: 'changesPercentage', width: 120,
      cellStyle: params => {
        if (params.value < 0) {
          return { color: '#FF005C', backgroundColor: '#FF005C30', 'text-align': 'right' };
        }
        return { color: '#46E372', backgroundColor: '#46E3721A', 'text-align': 'right' };

      },
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
    },
    {
      headerName: 'OPEN',
      field: 'open',
      width: 120,
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
      cellStyle: {
        'text-align': 'right'
      }
    },
    {
      headerName: 'HIGH',
      field: 'dayHigh',
      width: 120,
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
      cellStyle: {
        'text-align': 'right'
      }
    },
    {
      headerName: 'LOW',
      field: 'dayLow',
      width: 120,
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
      cellStyle: {
        'text-align': 'right'
      }
    },
    {
      headerName: 'PREV. CLOSE',
      field: 'previousClose',
      width: 120,
      valueFormatter: (params) => {
        return Number(params.value).toFixed(2);
      },
      cellStyle: {
        'text-align': 'right'
      }
    },
    
  ];

  defaultColDef = {
    resizable: true,
    sortable: true
  };

  context: any = {
    navigateToDetailsPage: this.navigateToDetailsPage.bind(this)
  }

  getContextMenuItems = (
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] => {

    var result: (string | MenuItemDef)[] = [
      {
        name: 'Show stock details',
        action: () => {
          this.router.navigate(['/stock-details/' + params.value]);
        }
      }
    ];
    return result;
  }

  navigateToDetailsPage(stockName:string){
    this.router.navigate(['/stock-details/' + stockName]);
  }

  onGridReady(event: any) {
    this.gridApi = event.api;
  }

}
