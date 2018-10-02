import { Injectable } from '@angular/core';
import { Car, CarCalculations, HorsepowerCalculations } from '../model'; //barrel usage
import { CarService } from './car.service';

@Injectable()
export class HorsepowerCalculationsService {

    constructor(private carService: CarService) { 

    }

    engineHorsepower = (calculations: CarCalculations): HorsepowerCalculations => {
        let hpCalc = calculations.et / 5.825;
        let rwHorsepower = Math.round((calculations.weight / Math.pow(hpCalc, 3)));

        //15 percent drivetrain loss on wheel and increase at flywheel (engine horsepower)
        let flywheelHP = (rwHorsepower * 1.146);
        let fwHorsepower = Math.round(flywheelHP);

        let hpCalcs: HorsepowerCalculations = {
            rearWheelHorsepower: rwHorsepower,
            flywheelHorsepower: fwHorsepower
        };

        return hpCalcs;
    }

    calculateCarData = (): Car[] => {

        //Call service that makes API call to get car data
        let cars = this.carService.getCars();
        for (let car of cars) {
            let calc: CarCalculations = {
                weight: car.calculations.weight,
                et: car.calculations.et
            }

            let hpCalcs = this.engineHorsepower(calc);
            car.horsepower = hpCalcs;
        }

        // if (typeof cars !== "undefined") {
        //     //for (let car of cars) {
        //     for (let i = 0, c = cars; i < c.length; i++) {
        //         let car:Car = c[i];
        //         let calc = {
        //             weight: car.weight,
        //             et: car.et
        //         }

        //         let hpCalcs = this.engineHorsepower(calc);
        //         car.horsepower = hpCalcs;
        //     }
        // }

        return cars;
    }

}