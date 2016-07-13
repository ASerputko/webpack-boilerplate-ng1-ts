HomeRoutes.$inject = ['$stateProvider'];
function HomeRoutes($stateProvider) {
    $stateProvider
            .state('home', {
                url: '/home',
                template: '<home></home>'
            });
}

export HomeRoutes;
