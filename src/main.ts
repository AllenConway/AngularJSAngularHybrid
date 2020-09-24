import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var angular: angular.IAngularStatic;

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const bootstrapFn = (extraProviders: StaticProvider[]) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);

angular.bootstrap(document.body, [
  'autoPerformanceApp',
  downgradeModule(bootstrapFn)
]);
