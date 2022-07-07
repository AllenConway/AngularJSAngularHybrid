declare var angular: angular.IAngularStatic;
import { Component, ElementRef, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'horsepowerHighlight',  // <-- this will be snake cased in usage as an attribute directive to horsepower-highlight
  templateUrl: './horsepower-highlight.component.html'
})
export class HorsepowerHighlightComponent {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'lightgreen';
  }

  // This method os only here for example's sake and should be placed more centrally for reuse (i.e. it's a utility method)
  static allowAttribute(componentFactory) {
    const wrapper = function ($compile, $injector, $parse) {
      const component = componentFactory($compile, $injector, $parse);
      component.restrict = "AE";
      return component;
    };
    wrapper.$inject = ["$compile", "$injector", "$parse"];
    return wrapper;
  }

}

// Downgrade the above Angular component to be able to be used as an AngularJS attribute directive
angular.module('autoPerformanceApp').directive("horsepowerHighlight", HorsepowerHighlightComponent.allowAttribute(downgradeComponent({ component: HorsepowerHighlightComponent })));