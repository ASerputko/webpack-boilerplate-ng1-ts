export class HelpComponent {
    template:any = require('./help.component.html')
    controller = HelpController
};

export class HelpController {
    
    static $inject = ['$rootScope'];

    constructor(private $rootScope) {
        $rootScope.title = 'Help | JavaScript Tutorial Sample App';
    }
};
