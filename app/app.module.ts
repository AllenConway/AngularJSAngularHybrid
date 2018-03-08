import { UpgradeModule } from '@angular/upgrade/static';
 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ]
})

export class AppModule {
    constructor(private upgrade:UpgradeModule){ }
     ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['autoPerformanceApp']);
     }
}