import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey("CompanyName=T/A Viqas Hussain,LicensedGroup=T/A Viqas Hussain,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-016245,ExpiryDate=9_June_2022_[v2]_MTY1NDcyOTIwMDAwMA==1fe1806f4c1833622bb983af6ef92aeb");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
