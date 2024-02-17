import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ComparisonComponent } from './features/comparison/comparison.component';
import { IndicesComponent } from './features/indices/indices.component';
import { StockDetailsComponent } from './features/stock-details/stock-details.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'indices', component: IndicesComponent  },
  { path: '', component: HomePageComponent},
  { path: 'stock-details/:stockname', component:StockDetailsComponent},
  { path: 'compare', component: ComparisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MaterialModule]
})
export class AppRoutingModule { }
