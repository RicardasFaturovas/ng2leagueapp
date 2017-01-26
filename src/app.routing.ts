import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home.component/home.component";
import {AboutComponent} from "./components/about.component/about.component";
import {ProfileComponent} from "./components/profile.component/profile.component";
import {BuildCreateComponent} from "./components/build.component/build.create.component/build.create.component";
import {BuildSearchComponent} from "./components/build.component/build.search.component/build.search.component";

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'build-create',
    component: BuildCreateComponent
  },
  {
    path:'build-search',
    component: BuildSearchComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
