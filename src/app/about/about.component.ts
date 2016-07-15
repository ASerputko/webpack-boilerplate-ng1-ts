export class AboutComponent {
    template:any = require('./about.component.html')
    controller = AboutController
};

export class AboutController {

    static $inject = ['$rootScope', 'layoutService'];

    constructor(private $rootScope, private layoutService) {
        layoutService.updateTitle('About');
    }
};
