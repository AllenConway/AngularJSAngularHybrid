import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}

// Instead of registering a component, we register a directive, a downgraded version of the Angular component.
// The as angular.IDirectiveFactory cast tells the TypeScript compiler that the return
// value of the downgradeComponent method is a directive factory.
angular.module('autoPerformanceApp')
    .directive('appRoot', downgradeComponent({ component: AppComponent }));
