import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarComponent} from "./components/navbar.component/navbar.component";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {AboutComponent} from "./components/about.component/about.component";
import {HomeComponent} from "./components/home.component/home.component";
import {ProfileComponent} from "./components/profile.component/profile.component";
import {BuildSearchComponent} from "./components/build.component/build.search.component/build.search.component";
import {BuildCreateComponent} from "./components/build.component/build.create.component/build.create.component";

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  routing],

  declarations: [ AppComponent,
                  BuildSearchComponent,
                  BuildCreateComponent,
                  NavbarComponent,
                  AboutComponent,
                  HomeComponent,
                  ProfileComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
