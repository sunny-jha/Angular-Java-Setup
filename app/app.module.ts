/// <reference path="../typings/lib.d.ts"/>
/// <reference path="../typings/app.d.ts"/>

namespace mydescription {
    angular.module('myDescription', [
        "angular.ui.router"
    ]);
    export let myDescription: () => ng.IModule = () => angular.module('myDescription');
}
