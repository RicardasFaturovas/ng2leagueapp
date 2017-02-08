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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var navbar_component_1 = require("./components/navbar.component/navbar.component");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var about_component_1 = require("./components/about.component/about.component");
var home_component_1 = require("./components/home.component/home.component");
var profile_component_1 = require("./components/profile.component/profile.component");
var build_search_component_1 = require("./components/build.component/build.search.component/build.search.component");
var build_create_component_1 = require("./components/build.component/build.create.component/build.create.component");
var item_modal_component_1 = require("./components/build.component/item.modal.component/item.modal.component");
var item_search_pipe_1 = require("./pipes/item.search.pipe");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_1.routing],
            declarations: [app_component_1.AppComponent,
                build_search_component_1.BuildSearchComponent,
                build_create_component_1.BuildCreateComponent,
                navbar_component_1.NavbarComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                item_modal_component_1.ItemModalComponent,
                item_search_pipe_1.ItemSearchPipe],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map