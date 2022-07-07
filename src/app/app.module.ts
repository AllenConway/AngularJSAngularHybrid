import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HorsepowerHighlightComponent } from './shared/directives/horsepower-highlight/horsepower-highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    HorsepowerHighlightComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent]
})
export class AppModule {

  ngDoBootstrap() {
    // Now done in main.ts by downgradeModule() function
    // Hybrid bootstrap AngularJS root module
    // this.upgrade.bootstrap(document.body, ['autoPerformanceApp'], { strictDi: true });
  }
}
