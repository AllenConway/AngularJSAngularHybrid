import { CarCalculations, HorsepowerCalculations } from './index';

export interface Car {
    year: number;
    make: string;
    model: string;
    horsepower: HorsepowerCalculations;
    // rearWheelHorsepower: number;
    // flywheelHorsepower: number;
    calculations: CarCalculations;
    // weight: number;
    // et: number;
}