AboutRoutes.$inject = ['$stateProvider'];
function AboutRoutes($stateProvider) {
    $stateProvider
            .state('about', {
                url: '/about',
                template: '<about></about>'
            });
}

export AboutRoutes;
