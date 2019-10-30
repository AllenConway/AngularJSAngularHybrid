import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

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
    // Hybrid bootstrap AngularJS root module
    this.upgrade.bootstrap(document.body, ['autoPerformanceApp'], { strictDi: true });
  }
}
