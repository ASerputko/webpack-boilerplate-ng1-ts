import * as angular from 'angular';
// import { HomeRoutes } from './home.routes';
import { HomeComponent, HomeController } from './home.component';

export let homeModule = angular
    .module('app.home', [])
    .component('home', new HomeComponent())
    .controller('HomeController', HomeController)
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: any, $urlRouterProvider: any) => {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>'
            });
    }])
    .name;