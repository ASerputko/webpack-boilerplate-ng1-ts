/// <reference path="../typings/tsd.d.ts"/>
import * as angular from 'angular';
import appDirective from './app/app.directive';
import AppService from './app/app.service';

import 'assets/scss/application.scss';


angular
    .module('app', [])
    .directive('app', appDirective)
    .service('appService', AppService)
    .run(['appService', (appService) => {
        let data = appService.getData();
        console.log('service data:', data);
    }]);
