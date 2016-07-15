export class LayoutService {

    static $inject = ['$rootScope']

    constructor(private $rootScope) {}

    updateTitle(title) {
        let baseTitle = 'JavaScript Tutorial Sample App';

        if (title) {
            this.$rootScope.title = title + ' | ' + baseTitle;
        } else {
            this.$rootScope.title = baseTitle;
        }
    }

}
