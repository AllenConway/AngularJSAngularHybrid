declare let angular: angular.IAngularStatic;

import { Component, OnInit, Inject } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
// import { CarService } from '../shared/services/car.service';
// import { Car, HorsepowerCalculations } from '../shared/model'; //barrel usage
import { HorsepowerCalculationsService } from '../shared/services/horsepower-calculations.service';
import { CarCalculations } from '../shared/model'; //barrel usage

@Component({
    selector: 'engine-horsepower',
    templateUrl: './engine-horsepower.html'
})

export class EngineHorsepowerComponent implements OnInit {

    title: string;
    calculations: CarCalculations;
    cars: any = [];
    calculatedHP: any;

    //constructor(@Inject('carService') private carService) { //ng1
    //constructor(private carService: CarService) { //iteration 1: business logic still in component, but calling ng service
    constructor(private horsepowerCaluclationsService: HorsepowerCalculationsService) {

        this.title = "Engine Horsepower Calculation";

        //Refactored to service
        this.calculations = {
            weight: null,
            et: null 
        };
        //this.cars = [];

        this.calculatedHP = {};
    }

    public submit = (calculations) => {
        this.calculatedHP = this.horsepowerCaluclationsService.engineHorsepower(calculations);
    };

    // engineHorsepower = (calculations):HorsepowerCalculations => {
    //     let hpCalc = calculations.et / 5.825;
    //     let rwHorsepower = Math.round((calculations.weight / Math.pow(hpCalc, 3)));

    //     //15 percent drivetrain loss on wheel and increase at flywheel (engine horsepower)
    //     let flywheelHP = (rwHorsepower * 1.146);
    //     let fwHorsepower = Math.round(flywheelHP);

    //     let hpCalcs: HorsepowerCalculations = {
    //         rearWheelHorsepower: rwHorsepower,
    //         flywheelHorsepower: fwHorsepower
    //     };

    //     return hpCalcs;
    // }

    // calculateCarData = () => {

    //     //Call service that makes API call to get car data
    //     let cars = this.carService.getCars();

    //     if (typeof cars !== "undefined") {
    //         //for (let car of cars) {
    //         for (let i = 0, c = cars; i < c.length; i++) {
    //             let car:Car = c[i];
    //             let calc = {
    //                 weight: car.weight,
    //                 et: car.et
    //             }

    //             let hpCalcs = this.engineHorsepower(calc);
    //             car.horsepower = hpCalcs;
    //         }
    //     }

    //     return this.cars = cars;
    // }

    ngOnInit() {
        console.log("EngineHorsepowerComponent initalized");
    }
}


//Instead of registering a component, we register a directive, a downgraded version of the Angular component.
//The as angular.IDirectiveFactory cast tells the TypeScript compiler that the return value of the downgradeComponent method is a directive factory.
angular.module('autoPerformanceApp')
    .directive('engineHorsepower', downgradeComponent({ component: EngineHorsepowerComponent }));