import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EngineDisplacementComponent, EngineHorsepowerComponent, EngineTorqueComponent } from './engine/index'; //barrel usage
import { CarService } from './shared/services/car.service';
import { HorsepowerCalculationsService } from './shared/services/horsepower-calculations.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UpgradeModule
    ],
    declarations: [
        EngineDisplacementComponent,
        EngineHorsepowerComponent,
        EngineTorqueComponent
    ],
    providers: [
        CarService, //ng
        HorsepowerCalculationsService, //ng
        //{ provide: 'carService', useFactory: ($injector: any) => $injector.get('carService'), deps: ['$injector'] }, //ng1
    ],
    entryComponents: [
        EngineDisplacementComponent, 
        EngineHorsepowerComponent, 
        EngineTorqueComponent
    ] //add to entryComponents since we downgraded. Specifies a list of components that should be compiled when this module is defined. For each component listed here, Angular will create a ComponentFactory and store it in the ComponentFactoryResolver
})

export class AppModule {
    constructor(private upgrade:UpgradeModule){ }
     ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['autoPerformanceApp']);
     }
}