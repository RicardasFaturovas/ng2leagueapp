import {Routes, RouterModule} from "@angular/router";
import {BuildComponent} from "./components/build.component/build.component";
import {ModuleWithProviders} from "@angular/core";

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
    path:'build',
    component: BuildComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
