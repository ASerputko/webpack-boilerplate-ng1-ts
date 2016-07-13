import * as angular from 'angular';
// import { HelpRoutes } from './help.routes';
import { HelpComponent, HelpController } from './help.component';

export let helpModule = angular
    .module('app.help', [])
    .component('help', new HelpComponent())
    .controller('HelpController', HelpController)
    .config(['$stateProvider', ($stateProvider: any) => {
        $stateProvider
            .state('help', {
                url: '/help',
                template: '<help></help>'
            });
    }])
    .name;