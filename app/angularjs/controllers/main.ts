var app = angular.module("autoPerformanceApp");

class MainController {

   constructor($scope, $state) {

      var vm:any = this;  //declare as any converting to TS

      vm.title = "Welcome to the Auto Performance Angular Hybrid App";      

      vm.tabs = [
         { title: "Engine Horsepower", route: "main.tab1", active: false },
         { title: "Engine Displacement", route: "main.tab2", active: false },
         { title: "Engine Torque", route: "main.tab3", active: false }
      ];

      vm.go = function (route) {
         $state.go(route);
      };

      vm.active = function (route) {
         return $state.is(route);
      };

      $scope.$on("$stateChangeSuccess", function () {
         vm.tabs.forEach(function (tab) {
            tab.active = vm.active(tab.route);
         });
      });

   }

}

MainController.$inject = ["$scope","$state"];

app.controller("MainController", MainController);