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
var auth_service_1 = require("./services/auth.service");
var user_service_1 = require("./services/user.service");
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
var login_component_1 = require("./components/user/login.component");
var details_component_1 = require("./components/details.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var websites_app_component_1 = require("./websites-app.component");
var routes_1 = require("./routes");
var forms_1 = require("@angular/forms");
var list_component_1 = require("./components/list.component");
var academic_query_service_1 = require("./services/academic-query.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            http_1.HttpModule],
        declarations: [websites_app_component_1.WebsitesAppComponent,
            list_component_1.ListComponent,
            details_component_1.DetailsComponent,
            login_component_1.LoginComponent,
            profile_component_1.ProfileComponent,
            register_component_1.RegisterComponent],
        providers: [academic_query_service_1.AcademicQueryService,
            user_service_1.UserService,
            auth_service_1.AuthService],
        bootstrap: [websites_app_component_1.WebsitesAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map