import * as angular from 'angular';
import { commonModule } from '../common/common.module';
import {HomeComponent, HomeController} from './home.component';

export let homeModule = angular
    .module('app.home', [commonModule])
    .component('home', new HomeComponent())
    .controller('HomeController', HomeController)
    // TODO: refactor this part
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: any, $urlRouterProvider: any) => {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>'
            });
    }])
    .name;