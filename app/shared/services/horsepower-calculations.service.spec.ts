import { CarService } from "./car.service";
import { HorsepowerCalculationsService } from './horsepower-calculations.service';
import { Car } from '../model';
import * as TypeMoq from "typemoq";

describe("Engine Calculations TypeScript Tests Using TypeMoq", () => {

    it("should return mocked calculated car data metrics", () => {

        //let service: CarServiceTs = new CarServiceTs;
        let mockedService = TypeMoq.Mock.ofType(CarService);

        let mockCars:Car[] = [
            { year: 2018, make: "Ford", model: "Mustang GT500", horsepower:{rearWheelHorsepower:0, flywheelHorsepower: 0}, calculations:{weight: 3630, et: 13.7} }
        ];
        mockedService.setup(x => x.getCars()).returns(() => mockCars);

        let service = mockedService.object;
                
        let engineCalc: HorsepowerCalculationsService = new HorsepowerCalculationsService(service);
        let carData = engineCalc.calculateCarData();

        mockedService.verify(x => x.getCars(), TypeMoq.Times.once())
        expect(carData[0].year).toBe(2018);
        expect(carData[0].make).toBe("Ford");
        expect(carData[0].horsepower.flywheelHorsepower).toBe(320);
        expect(carData[0].horsepower.rearWheelHorsepower).toBe(279);
    });

});