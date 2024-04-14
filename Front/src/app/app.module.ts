import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularStockChartsModule } from '@canvasjs/angular-stockcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { IndicesComponent } from './features/indices/indices.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { LoosersComponent } from './home-page/loosers/loosers.component';
import { TopPerformersComponent } from './home-page/top-performers/top-performers.component';
import { HomeIndicesComponent } from './home-page/home-indices/home-indices.component';
import { ChangeCellStyleDirective } from './Directives/change-cell-style.directive';
import { StockDetailsComponent } from './features/stock-details/stock-details.component';
import { ClickOutsideDirective } from './Directives/click-outside.directive';
import { LoginComponent } from './navbar/profile/login/login.component';
import { SignupComponent } from './navbar/profile/signup/signup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { CopyUserIdModalComponent } from './Modals/copy-user-id-modal/copy-user-id-modal.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AgGridIndexComponent } from './Tables/ag-grid-index/ag-grid-index.component';
import { SearchComponent } from './navbar/search/search.component';
import { ColumnChartComponent } from './HighCharts/column-chart/column-chart.component';
import { TwoDecimalPipe } from './Pipes/two-decimal.pipe';
import { TruncatePipe } from './Pipes/truncate.pipe';
import { StockInfosComponent } from './features/stock-details/stock-infos/stock-infos.component';
import { DisplayPriceCardDirective } from './Directives/display-price-card.directive';
import { DisplayRatioCardDirective } from './Directives/display-ratio-card.directive';
import { DisplayVolumeCardDirective } from './Directives/display-volume-card.directive';
import { NewsComponent } from './features/news/news.component';
import { TechnicalsComponent } from './features/technicals/technicals.component';
import { DocumentationsComponent } from './features/documentations/documentations.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { CacheInterceptor } from './Interceptors/cache.interceptor';
import { DetailsLinkComponent } from './CellRenderers/details-link/details-link.component';

const config: SocketIoConfig = { url: environment.baseUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndicesComponent,
    HomePageComponent,
    ProfileComponent,
    LoosersComponent,
    TopPerformersComponent,
    HomeIndicesComponent,
    ChangeCellStyleDirective,
    StockDetailsComponent,
    ClickOutsideDirective,
    LoginComponent,
    SignupComponent,
    CopyUserIdModalComponent,
    AgGridIndexComponent,
    SearchComponent,
    ColumnChartComponent,
    TwoDecimalPipe,
    TruncatePipe,
    StockInfosComponent,
    DisplayPriceCardDirective,
    DisplayRatioCardDirective,
    DisplayVolumeCardDirective,
    NewsComponent,
    TechnicalsComponent,
    DocumentationsComponent,
    PricingComponent,
    DetailsLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CanvasJSAngularStockChartsModule,
    HttpClientModule,
    CanvasJSAngularChartsModule,
    AgGridModule,
    NgbModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    SocketIoModule.forRoot(config),
    NgSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
