/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="./assets/typings/custom-tsd.d.ts"/>

import * as angular from 'angular';
import 'assets/scss/application.scss';

import { commonModule } from './app/common/common.module';
import { homeModule } from './app/home/home.module';
import { helpModule } from './app/help/help.module';
import { aboutModule } from './app/about/about.module';

angular
    .module('app', [
        'ui.router',

        commonModule,
        homeModule,
        helpModule,
        aboutModule
    ])
    .run(['$rootScope', ($rootScope: any) => {
        $rootScope.title = '';
    }]);
