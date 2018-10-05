import { TestBed } from '@angular/core/testing';
import { EngineHorsepowerComponent } from './engine-horsepower.component';
import { FormsModule } from '@angular/forms';
import { CarService } from '../shared/services/car.service';
import { HorsepowerCalculationsService } from '../shared/services/horsepower-calculations.service';

describe('EngineHorsepowerComponent', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports:[
                FormsModule
            ],
            declarations: [
                EngineHorsepowerComponent
            ],
            providers: [
                CarService,
                HorsepowerCalculationsService
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(EngineHorsepowerComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

});

// describe('simple matchers', function() {

//     it("should be true", function () {
//         expect(true).toBe(true);
//     });

// });