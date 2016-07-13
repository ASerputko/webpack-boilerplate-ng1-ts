export class HomeComponent {
    template:any = require('./home.component.html');
    controller = HomeController;
};

export class HomeController {
    
    static $inject = ['$rootScope'];

    constructor(private $rootScope) {
        $rootScope.title = 'Home | JavaScript Tutorial Sample App';
    }

};
