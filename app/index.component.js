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
var carousel_component_1 = require('./carousel.component');
var IndexComponent = (function () {
    function IndexComponent() {
        this.title = "Index";
        this.subtitle = "Epsilon Chi Chapter at Virginia Tech";
        this.index_images = ["includes/images/no_box.png", "includes/images/clouds.jpg", "includes/images/torg-sunset.jpg"];
    }
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'index',
            templateUrl: 'app/index.component.html',
            styleUrls: ['app/index.component.css'],
            directives: [carousel_component_1.CarouselComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map