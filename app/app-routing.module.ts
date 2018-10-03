import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EngineDisplacementComponent } from './engine/engine-displacement.component';
import { EngineHorsepowerComponent } from './engine/engine-horsepower.component';
import { EngineTorqueComponent } from './engine/engine-torque.component';


const routes: Routes = [
  { path: '', component: EngineHorsepowerComponent },
  { path: 'enginehorsepower', component: EngineHorsepowerComponent },
  { path: 'enginedisplacement', component: EngineDisplacementComponent },
  { path: 'enginetorque', component: EngineTorqueComponent },  
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//Consolodated list of routed components to be imported by app module
export const routedComponents = [AppComponent, EngineDisplacementComponent, EngineHorsepowerComponent, EngineTorqueComponent];