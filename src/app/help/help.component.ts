export class HelpComponent {
    template:any = require('./help.component.html')
    controller = HelpController
};

export class HelpController {
    
    static $inject = ['$rootScope', 'layoutService'];

    constructor(private $rootScope, private layoutService) {
        layoutService.updateTitle('Help');
    }
};
