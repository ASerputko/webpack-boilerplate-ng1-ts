import * as angular from 'angular';
import { commonModule } from '../common/common.module';
import {HelpComponent, HelpController} from './help.component';

export let helpModule = angular
    .module('app.help', [commonModule])
    .component('help', new HelpComponent())
    .controller('HelpController', HelpController)
    // TODO: refactor this part
    .config(['$stateProvider', ($stateProvider: any) => {
        $stateProvider
            .state('help', {
                url: '/help',
                template: '<help></help>'
            });
    }])
    .name;