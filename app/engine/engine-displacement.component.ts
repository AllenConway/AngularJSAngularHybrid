//declare var angular: angular.IAngularStatic;

import { Component, OnInit } from '@angular/core';
//import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'engine-displacement',
    templateUrl: './engine-displacement.html'
})

export class EngineDisplacementComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log("EngineDisplacementComponent initalized");
    }
}


//Instead of registering a component, we register a directive, a downgraded version of the Angular component.
//The as angular.IDirectiveFactory cast tells the TypeScript compiler that the return value of the downgradeComponent method is a directive factory.
// angular.module('autoPerformanceApp')
//     .directive('engineDisplacement', downgradeComponent({ component: EngineDisplacementComponent }));