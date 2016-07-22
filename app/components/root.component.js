"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
//My Imports
var index_component_1 = require('./index.component');
var rush_component_1 = require('./rush.component');
var RootComponent = (function () {
    function RootComponent() {
        this.title = "Phi Kappa Tau - Epsilon Chi";
        this.subtitle = "at Virginia Tech";
    }
    RootComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/rush',
                name: 'Rush',
                component: rush_component_1.RushComponent
            },
            {
                path: '/index',
                name: 'Index',
                component: index_component_1.IndexComponent,
                useAsDefault: true
            },
            {
                path: '/leadership',
                name: 'Leadership',
                component: rush_component_1.RushComponent
            },
            {
                path: '/contact',
                name: 'Contact',
                component: index_component_1.IndexComponent
            }
        ]),
        core_1.Component({
            selector: 'root',
            templateUrl: 'app/root.component.html',
            styleUrls: ['app/root.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=root.component.js.map