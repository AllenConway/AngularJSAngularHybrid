declare var angular: angular.IAngularStatic;

import { Component, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'engine-torque',
    templateUrl: './engine-torque.html'
})

export class EngineTorqueComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log("EngineTorqueComponent initalized");
    }
}

//Instead of registering a component, we register a directive, a downgraded version of the Angular component.
//The as angular.IDirectiveFactory cast tells the TypeScript compiler that the return value of the downgradeComponent method is a directive factory.
angular.module('autoPerformanceApp')
    .directive('engineTorque', downgradeComponent({ component: EngineTorqueComponent }));