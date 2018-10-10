import { Injectable } from '@angular/core';
import { Car, HorsepowerCalculations } from '../model';

@Injectable()
export class CarService {

    constructor() { }

    getCars(): Car[] {
        //Mock data representing http call...
        const horsepower: HorsepowerCalculations = {rearWheelHorsepower:0, flywheelHorsepower: 0}
        return [
            { year: 2001, make: "Ford", model: "Mustang COBRA SVT", horsepower, calculations:{weight: 3630, et: 13.7} },
            { year: 2014, make: "Ford", model: "Mustang Shelby GT500", horsepower, calculations:{weight: 3845, et: 11.6} },
            { year: 2015, make: "Dodge", model: "Challenger Hellcat", horsepower, calculations:{weight: 4449, et: 12.1} },
            { year: 2015, make: "Chevy", model: "Corvette Z06", horsepower, calculations:{weight: 3524, et: 11.3} },
            { year: 2015, make: "Ford", model: "Camaro ZL1", horsepower, calculations:{weight: 4120, et: 12.4} }
        ];
  
     }
  
     getCarsAsync() {
        //Some longer running API call...
        return setTimeout(() => {}, 2500)
     }
}