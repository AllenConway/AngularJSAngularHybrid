var app = angular.module("autoPerformanceApp");

class EngineHorsepowerController {

   constructor(carService) {

      var vm:any = this; //declare as any converting to TS
      
      vm.title = "Engine Horsepower Calculation";

      vm.calculations = {
         weight: 0,
         et: 0
      };

      vm.cars = [];

      vm.calculatedHP = {};

      vm.submit = function (calculations) {
         vm.calculatedHP = this.engineHorsepower(calculations);
      };

      vm.engineHorsepower = function (calculations) {
         var hpCalc = calculations.et / 5.825;
         var rwHorsepower = Math.round((calculations.weight / Math.pow(hpCalc, 3)));

         //15 percent drivetrain loss on wheel and increase at flywheel (engine horsepower)
         var flywheelHP = (rwHorsepower * 1.146);
         var fwHorsepower = Math.round(flywheelHP);

         return new HorsepowerCalculations(rwHorsepower, fwHorsepower);                                 

      }

      vm.calculateCarData = function () {

         //Call service that makes API call to get car data
         var cars = carService.getCars();

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

         return vm.cars = cars;

      }

   }

}

app.controller("EngineHorsepowerController", ["carService", EngineHorsepowerController]);