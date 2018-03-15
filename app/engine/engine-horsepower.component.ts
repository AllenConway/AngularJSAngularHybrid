declare var angular: angular.IAngularStatic;

import { Component, OnInit, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { HorsepowerCalculations } from '../shared/HorsepowerCalculations';

@Component({
    selector: 'engine-horsepower',
    templateUrl: './engine-horsepower.html'
})

export class EngineHorsepowerComponent implements OnInit {

    title: string;
    calculations: any;
    cars: any = [];
    calculatedHP: any;

    constructor(@Inject('carService') private carService) {

        this.title = "Engine Horsepower Calculation";

        this.calculations = {
            weight: null,
            et: null 
        };

        this.cars = [];

        this.calculatedHP = {};
    }

    public submit = (calculations) => {
        this.calculatedHP = this.engineHorsepower(calculations);
    };

    engineHorsepower = (calculations) => {
        var hpCalc = calculations.et / 5.825;
        var rwHorsepower = Math.round((calculations.weight / Math.pow(hpCalc, 3)));

        //15 percent drivetrain loss on wheel and increase at flywheel (engine horsepower)
        var flywheelHP = (rwHorsepower * 1.146);
        var fwHorsepower = Math.round(flywheelHP);

        return new HorsepowerCalculations(rwHorsepower, fwHorsepower);

    }

    calculateCarData = () => {

        //Call service that makes API call to get car data
        var cars = this.carService.getCars();

        if (typeof cars !== "undefined") {
            //for (var car of cars) {
            for (var i = 0, c = cars; i < c.length; i++) {
                var car = c[i];
                var calc = {
                    weight: car.weight,
                    et: car.et
                }

                var hpCalcs = this.engineHorsepower(calc);
                car.rearWheelHorsepower = hpCalcs.rearWheelHorsepower;
                car.flywheelHorsepower = hpCalcs.flywheelHorsepower;
            }
        }

        return this.cars = cars;

    }

    ngOnInit() {
        console.log("EngineHorsepowerComponent initalized");
    }
}


//Instead of registering a component, we register a directive, a downgraded version of the Angular component.
//The as angular.IDirectiveFactory cast tells the TypeScript compiler that the return value of the downgradeComponent method is a directive factory.
angular.module('autoPerformanceApp')
    .directive('engineHorsepower', downgradeComponent({ component: EngineHorsepowerComponent }));