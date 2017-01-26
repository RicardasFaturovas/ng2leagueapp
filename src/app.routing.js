"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component/home.component");
var about_component_1 = require("./components/about.component/about.component");
var profile_component_1 = require("./components/profile.component/profile.component");
var build_create_component_1 = require("./components/build.component/build.create.component/build.create.component");
var build_search_component_1 = require("./components/build.component/build.search.component/build.search.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'build-create',
        component: build_create_component_1.BuildCreateComponent
    },
    {
        path: 'build-search',
        component: build_search_component_1.BuildSearchComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map