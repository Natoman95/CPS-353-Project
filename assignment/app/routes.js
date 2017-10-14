"use strict";
var login_component_1 = require("./user/login.component");
exports.appRoutes = [
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map