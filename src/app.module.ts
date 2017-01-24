import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {BuildComponent} from "./components/build.component/build.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BuildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
