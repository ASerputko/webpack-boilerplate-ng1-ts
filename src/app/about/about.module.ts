import * as angular from 'angular';
import { commonModule } from '../common/common.module';
import { AboutComponent, AboutController } from './about.component';

export let aboutModule = angular
    .module('app.about', [commonModule])
    .component('about', new AboutComponent())
    .controller('AboutController', AboutController)
    .config(['$stateProvider', ($stateProvider: any) => {
        $stateProvider
            .state('about', {
                url: '/about',
                template: '<about></about>'
            });
    }])
    .name;
