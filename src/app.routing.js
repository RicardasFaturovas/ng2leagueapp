"use strict";
var router_1 = require("@angular/router");
var build_component_1 = require("./components/build.component/build.component");
var appRoutes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'build',
        component: build_component_1.BuildComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map