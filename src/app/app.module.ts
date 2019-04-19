import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import * as angular from 'angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }
  ngDoBootstrap() {
    // Using the CLI and to prevent the following error: 'AngularJS v1.x is not loaded!'
    // make sure to load AngularJS into the Angular library
    setAngularJSGlobal(angular);
    // Hybrid bootstrap AngularJS root module
    this.upgrade.bootstrap(document.documentElement, ['autoPerformanceApp']);
  }
}
