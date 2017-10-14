"use strict";
var login_component_1 = require("./components/user/login.component");
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
exports.appRoutes = [
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: 'user/profile', component: profile_component_1.ProfileComponent },
    { path: 'user/register', component: register_component_1.RegisterComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map