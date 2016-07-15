export class HomeComponent {
    template:any = require('./home.component.html');
    controller = HomeController;
};

export class HomeController {
    
    static $inject = ['$rootScope', 'layoutService'];

    constructor(private $rootScope, private layoutService) {
        layoutService.updateTitle('Home');
    }

};
