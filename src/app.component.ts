import { Component } from '@angular/core';
import {RiotApiService} from "./services/riotApi.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [RiotApiService]
})
export class AppComponent  {
}
