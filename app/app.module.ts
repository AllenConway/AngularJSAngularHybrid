import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routedComponents, AppRoutingModule } from './app-routing.module';

//import { EngineDisplacementComponent, EngineHorsepowerComponent, EngineTorqueComponent } from './engine/index'; //barrel usage
import { CarService } from './shared/services/car.service';
import { HorsepowerCalculationsService } from './shared/services/horsepower-calculations.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        UpgradeModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        routedComponents
        // EngineDisplacementComponent,
        // EngineHorsepowerComponent,
        // EngineTorqueComponent
    ],
    providers: [
        CarService, //ng
        HorsepowerCalculationsService, //ng
        //{ provide: 'carService', useFactory: ($injector: any) => $injector.get('carService'), deps: ['$injector'] }, //ng1
    ],
    bootstrap:[AppComponent]
    // entryComponents: [
    //     EngineDisplacementComponent, 
    //     EngineHorsepowerComponent, 
    //     EngineTorqueComponent
    // ] //add to entryComponents since we downgraded. Specifies a list of components that should be compiled when this module is defined. For each component listed here, Angular will create a ComponentFactory and store it in the ComponentFactoryResolver
})

export class AppModule {}

// export class AppModule {
//     constructor(private upgrade:UpgradeModule){ }
//      ngDoBootstrap() {
//         this.upgrade.bootstrap(document.documentElement, ['autoPerformanceApp']);
//      }
// }