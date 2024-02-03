import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularStockChartsModule } from '@canvasjs/angular-stockcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FeaturesComponent } from './features/features.component';
import { CandleStickComponent } from './features/candle-stick/candle-stick.component';
import { FundamentalChartsComponent } from './features/fundamental-charts/fundamental-charts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndicesComponent } from './features/indices/indices.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { LoosersComponent } from './home-page/loosers/loosers.component';
import { TopPerformersComponent } from './home-page/top-performers/top-performers.component';
import { HomeIndicesComponent } from './home-page/home-indices/home-indices.component';
import { ChangeCellStyleDirective } from './Directives/change-cell-style.directive';
import { StockDetailsComponent } from './features/stock-details/stock-details.component';
import { ComparisonComponent } from './features/comparison/comparison.component';
import { ClickOutsideDirective } from './Directives/click-outside.directive';
import { LoginComponent } from './navbar/profile/login/login.component';
import { SignupComponent } from './navbar/profile/signup/signup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthInterceptor } from './auth.interceptor';
import { CopyUserIdModalComponent } from './Modals/copy-user-id-modal/copy-user-id-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    CandleStickComponent,
    FundamentalChartsComponent,
    NavbarComponent,
    IndicesComponent,
    HomePageComponent,
    ProfileComponent,
    LoosersComponent,
    TopPerformersComponent,
    HomeIndicesComponent,
    ChangeCellStyleDirective,
    StockDetailsComponent,
    ComparisonComponent,
    ClickOutsideDirective,
    LoginComponent,
    SignupComponent,
    CopyUserIdModalComponent,
    
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
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
