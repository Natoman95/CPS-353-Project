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
var auth_service_1 = require("./../services/auth.service");
var academic_query_service_1 = require("./../services/academic-query.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SearchComponent = (function () {
    function SearchComponent(router, academicSvc, authService) {
        this.router = router;
        this.academicSvc = academicSvc;
        this.authService = authService;
        this.query = null;
    }
    // Get academic data about the query
    SearchComponent.prototype.search = function (query) {
        console.log("list.component query: " + query);
        var searchResults = null;
        if (query != null) {
            this.academicSvc.search(query);
        }
    };
    // Retrieve the results of that search
    SearchComponent.prototype.getSearchResults = function () {
        return this.academicSvc.getSearchResults();
    };
    // Navigate to the details page upon clicking one item of the search results
    SearchComponent.prototype.getDetails = function (work) {
        // Save the details that will be displayed on the details page
        this.academicSvc.setDetails(work);
        this.router.navigate(["/user/details"]);
    };
    SearchComponent.prototype.profile = function () {
        this.router.navigate(["/user/", auth_service_1.AuthService.currentUser.id]);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/search.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, academic_query_service_1.AcademicQueryService, auth_service_1.AuthService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map