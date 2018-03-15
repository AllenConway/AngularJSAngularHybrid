/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/
//import {HomeController} from "./controllers/HomeController";
//var HomeController = require("./controllers/HomeController");

class StatesProvider {

    constructor($stateProvider, $urlRouterProvider) {
    //Removed once making a .ts file (unnecessary)
    //    this.$stateProvider = $stateProvider;
    //    this.$urlRouterProvider = $urlRouterProvider;
 
       $urlRouterProvider.otherwise("/main/enginehorsepower");
 
       var main = {
          name: "main",
          abstract: true,
          url: "/main",
          templateUrl: "app/angularjs/partials/main.html",
          controller: "MainController as vm"
       };
 
       var mainTab1 = {
          name: "main.tab1",         
          url: "/enginehorsepower",
          template: "<engine-horsepower></engine-horsepower>"
       };
 
       var mainTab2 = {
          name: "main.tab2",
          url: "/enginedisplacement",
          template: "<engine-displacement></engine-displacement>"
       };
 
       var mainTab3 = {
          name: "main.tab3",
          url: "/enginetorque",
          template: "<engine-torque></engine-torque>"
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
 
