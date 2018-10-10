import '../styles.css';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    title:string;
    tabs = {};

    constructor() {

        this.title = "Welcome to the Auto Performance Angular App";

        this.tabs = [
            { title: "Engine Horsepower", route: "enginehorsepower", active: false },
            { title: "Engine Displacement", route: "enginedisplacement", active: false },
            { title: "Engine Torque", route: "enginetorque", active: false }
        ];

    }

    ngOnInit() { }

    // var vm:any = this;  //declare as any converting to TS



    // vm.go = function (route) {
    //    $state.go(route);
    // };

    // vm.active = function (route) {
    //    return $state.is(route);
    // };

    // $scope.$on("$stateChangeSuccess", function () {
    //    vm.tabs.forEach(function (tab) {
    //       tab.active = vm.active(tab.route);
    //    });
    // });

}