import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { IndicesComponent } from './features/indices/indices.component';
import { StockDetailsComponent } from './features/stock-details/stock-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DocumentationsComponent } from './features/documentations/documentations.component';
import { NewsComponent } from './features/news/news.component';
import { PricingComponent } from './features/pricing/pricing.component';
import { TechnicalsComponent } from './features/technicals/technicals.component';

const routes: Routes = [
  { path: 'indices', component: IndicesComponent  },
  { path: 'pricing', component: PricingComponent  },
  { path: 'documentation', component: DocumentationsComponent  },
  { path: 'technicals', component: TechnicalsComponent  },
  { path: 'news', component: NewsComponent  },
  { path: 'home', component: HomePageComponent},
  { path: 'stock-details/:stockname', component:StockDetailsComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MaterialModule]
})
export class AppRoutingModule { }
