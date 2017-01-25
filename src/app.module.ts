import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {BuildComponent} from "./components/build.component/build.component";
import {NavbarComponent} from "./components/navbar.component/navbar.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, BuildComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
