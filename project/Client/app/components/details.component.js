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
var academic_query_service_1 = require("./../services/academic-query.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var DetailsComponent = (function () {
    function DetailsComponent(router, activatedRoute, academicSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.academicSvc = academicSvc;
    }
    DetailsComponent.prototype.getSearchResults = function () {
        return JSON.stringify(this.academicSvc.getSearchResults());
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute, academic_query_service_1.AcademicQueryService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map