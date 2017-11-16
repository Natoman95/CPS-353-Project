"use strict";
var list_component_1 = require("./components/list.component");
var details_component_1 = require("./components/details.component");
exports.appRoutes = [
    { path: 'user/list', component: list_component_1.ListComponent },
    { path: 'user/details', component: details_component_1.DetailsComponent },
    { path: '', redirectTo: 'user/list', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map