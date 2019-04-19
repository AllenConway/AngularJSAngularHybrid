/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/
//import {HomeController} from "./controllers/HomeController";
//var HomeController = require("./controllers/HomeController");

class StatesProvider {

   constructor($stateProvider, $urlRouterProvider) {
      this.$stateProvider = $stateProvider;
      this.$urlRouterProvider = $urlRouterProvider;

      $urlRouterProvider.otherwise("/main/tab1");      

      var main = {
         name: "main",
         abstract: true,
         url: "/main",
         templateUrl: "app/angularjs/partials/main.html",
         controller: "MainController as vm"
      };

      var mainTab1 = {
         name: "main.tab1",         
         url: "/tab1",
         templateUrl: "app/angularjs/partials/engineHorsepower.html",
         controller: "EngineHorsepowerController as vm"
      };

      var mainTab2 = {
         name: "main.tab2",
         url: "/tab2",
         templateUrl: "app/angularjs/partials/tab2.html"
      };

      var mainTab3 = {
         name: "main.tab3",
         url: "/tab3",
         templateUrl: "app/angularjs/partials/tab3.html"
      };

      $stateProvider
         .state(main)
         .state(mainTab1)
         .state(mainTab2)
         .state(mainTab3);

   }

}

StatesProvider.$inject = ["$stateProvider", "$urlRouterProvider"];

var app = angular.module("autoPerformanceApp", ["ui.router", "ui.bootstrap"])
   .config(StatesProvider);
