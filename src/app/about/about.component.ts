export class AboutComponent {
    template:any = require('./about.component.html')
    controller = AboutController
};

export class AboutController {

    static $inject = ['$rootScope'];

    constructor(private $rootScope) {
        $rootScope.title = 'About | JavaScript Tutorial Sample App';
    }
};
