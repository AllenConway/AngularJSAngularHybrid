import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CarService } from '../shared/services/car.service';
import { EngineHorsepowerComponent } from './engine-horsepower.component';
import { HorsepowerCalculations } from '../shared/model';
import { HorsepowerCalculationsService } from '../shared/services/horsepower-calculations.service';
import * as TypeMoq from "typemoq";

describe('EngineHorsepowerComponent', () => {

    let mockedHpCalcService = TypeMoq.Mock.ofType(HorsepowerCalculationsService);
    let mockedCarService = TypeMoq.Mock.ofType(CarService);
    let component: EngineHorsepowerComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                EngineHorsepowerComponent
            ],
            providers: [
                { provide: HorsepowerCalculationsService, useFactory: () => { return mockedHpCalcService.object } },
                { provide: CarService, useFactory: () => { return mockedCarService.object } }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        let fixture = TestBed.createComponent(EngineHorsepowerComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call engineHorsepower from submit', () => {
        
        //Arrange
        const horsepowerCalculationsMock: HorsepowerCalculations = {
            rearWheelHorsepower: 500,
            flywheelHorsepower: 575
        }
        const calculations = {
            weight: null,
            et: null 
        };
        mockedHpCalcService.setup(x => x.engineHorsepower(calculations)).returns(() => horsepowerCalculationsMock);

        //Act
        component.submit(calculations);

        //Assert
        mockedHpCalcService.verify(x => x.engineHorsepower(TypeMoq.It.isAny()), TypeMoq.Times.exactly(1));
        expect(component.calculatedHP).toBeDefined();
        expect(component.calculatedHP.rearWheelHorsepower).toEqual(500);
        expect(component.calculatedHP.flywheelHorsepower).toEqual(575);

    });

});