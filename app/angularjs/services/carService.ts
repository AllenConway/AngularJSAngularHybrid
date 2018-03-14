/// <reference path="../../../node_modules/@angular/upgrade/static/src/common/angular1.d.ts" />

var app = angular.module("autoPerformanceApp");

class carService {

   getCars() {
      return [
          { year: 2001, make: "Ford", model: "Mustang COBRA SVT", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3630, et: 13.7 },
          { year: 2014, make: "Ford", model: "Mustang Shelby GT500", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3845, et: 11.6 },
          { year: 2015, make: "Dodge", model: "Challenger Hellcat", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 4449, et: 12.1 },
          { year: 2015, make: "Chevy", model: "Corvette Z06", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3524, et: 11.3 },
          { year: 2015, make: "Ford", model: "Camaro ZL1", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 4120, et: 12.4 }
      ];

   }

   getCarsAsync() {

      //var result = $q.defer();

      ////Some longer running API call...
      //setTimeout(() => {
      //   result.resolve(true);
      //}, 2500);

      //return result.promise;

      //$timeout returns a promise, so could use this instead of $q above
      //Some longer running API call...      
      //return $timeout(function () { }, 2500);
      return window.setTimeout(() => {}, 2500)
   }
}

app.service("carService", carService);