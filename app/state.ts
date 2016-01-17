/// <reference path="../typings/lib.d.ts"/>
/// <reference path="../typings/app.d.ts"/>

namespace mydescription.state {
    myDescription().config(
        
        ['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state('login', {
               url: '/login',
               templateUrl: '/login/login.html',
               controller: 'LoginController',
               controllerAs: 'login' 
            });
        }]
    );
}