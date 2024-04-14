import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IndexSocketService } from 'src/app/Services/index-socket.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit, OnDestroy, AfterViewInit {

	rowData: any[]=[];
	indexSubscription:Subscription | undefined;
	selectedIndexType: string = 'BMI';
	selectedIndex: string = 'NIFTY50';
	indexType: any[] = [{ displayName: 'BROAD MARKET INDICES', value: 'BMI' }, { displayName: 'SECTORAL INDICES', value: 'SEC' }];

	broadMarketIndex: any[] = [
		{ displayName: 'NIFTY 50', value: 'NIFTY50' },
		{ displayName: 'NIFTY NEXT 50', value: 'NIFTYNEXT50' },
		{ displayName: 'NIFTY MIDCAP 50', value: 'NIFTYMIDCAP50' }
	];

	sectoralIndices: any[] = [
		{ displayName: 'NIFTY AUTO', value: 'NIFTYAUTO' },
		{ displayName: 'NIFTY BANK', value: 'NIFTYBANK' },
		{ displayName: 'NIFTY ENERGY', value: 'NIFTYENERGY' },
		{ displayName: 'NIFTY OIL & GAS', value: 'NIFTYOILGAS' }
	];

	selectedIndexTypeOptions: any[] = this.broadMarketIndex;

	constructor(private socketService: IndexSocketService) {
	}

	ngAfterViewInit(): void {
		this.socketService.sendMessage(this.selectedIndex);

		this.indexSubscription=this.socketService.getMessage().subscribe((res: any) => {
			this.rowData=res.data;
		})
	}

	ngOnDestroy(): void {
		//this.socketService.disconnect();
		this.indexSubscription?.unsubscribe();
	}

	ngOnInit(): void {
	}

	onTypeChange() {
		if (this.selectedIndexType == 'BMI') {
			this.selectedIndexTypeOptions = this.broadMarketIndex;
		}
		else if (this.selectedIndexType == 'SEC') {
			this.selectedIndexTypeOptions = this.sectoralIndices;
		}

		this.selectedIndex = this.selectedIndexTypeOptions[0].value;
		this.onIndexChange();
	}

	onIndexChange() {
		this.socketService.sendMessage(this.selectedIndex);
	}	

}
