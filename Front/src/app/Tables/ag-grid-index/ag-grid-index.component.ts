import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GetContextMenuItemsParams, MenuItemDef } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ag-grid-index',
  templateUrl: './ag-grid-index.component.html',
  styleUrls: ['./ag-grid-index.component.css']
})
export class AgGridIndexComponent implements OnInit, OnChanges {

  rowData: any = [];
  pinnedTopRowData: any = [];
  api: any;

  @Input() data: any
  constructor(private router: Router,) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.rowData = this.data;
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
      headerTooltip: 'name'
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
      headerName: 'VOLUME(shares)',
      field: 'volume',
      width: 120,
      valueParser: params => Number(params.newValue),
      cellStyle: {
        'text-align': 'right'
      }
    },
  ];

  defaultColDef = {
    resizable: true,
    sortable: true
  };

  getContextMenuItems = (
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] => {

    var result: (string | MenuItemDef)[] = [
      {
        name: 'Show stock details',
        action: () => {
          this.router.navigate(['/stock-details/' + params.value]);
          console.log(params)
        }
      }
    ];
    return result;
  }

  onGridReady(event: any) {
    this.api = event.api;
  }

}
