import * as angular from 'angular';
import {LayoutService} from './services/layout.service';

export let commonModule = angular
    .module('app.common', [])
    .service('layoutService', LayoutService)
    .name;