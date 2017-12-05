"use strict";
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
var login_component_1 = require("./components/user/login.component");
var search_component_1 = require("./components/search.component");
var details_component_1 = require("./components/details.component");
exports.appRoutes = [
    { path: 'user/search', component: search_component_1.SearchComponent },
    { path: 'user/details', component: details_component_1.DetailsComponent },
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: 'user/register', component: register_component_1.RegisterComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: '', redirectTo: 'user/login', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map