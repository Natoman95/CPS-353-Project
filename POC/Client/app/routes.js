"use strict";
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
var login_component_1 = require("./components/user/login.component");
var list_component_1 = require("./components/list.component");
var details_component_1 = require("./components/details.component");
exports.appRoutes = [
    { path: 'user/list', component: list_component_1.ListComponent },
    { path: 'user/details', component: details_component_1.DetailsComponent },
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: 'user/register', component: register_component_1.RegisterComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: '', redirectTo: 'user/login', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map