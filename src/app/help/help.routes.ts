HelpRoutes.$inject = ['$stateProvider'];
function HelpRoutes($stateProvider) {
    $stateProvider
            .state('help', {
                url: '/help',
                template: '<help></help>'
            });
}

export HelpRoutes;
