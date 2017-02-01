import {Component} from "@angular/core";
import {RiotApiService} from "../../../services/riotApi.service";
import 'rxjs/Rx'
import {Item} from "../../../classes/item.class";

@Component({
  moduleId: module.id,
  selector: 'build-create',
  templateUrl: 'build.create.component.html',
})
export class BuildCreateComponent  {
  items: Array<Item>;
  itemSlots: Array<Item>;

  constructor(private _riotApiService: RiotApiService){

  }

  addItem(item: Item, slotNumber: number){
    this.itemSlots[slotNumber] = item;
  }

  removeItem(slotNumber: number){
    this.itemSlots[slotNumber] = null;
  }

  ngOnInit(){
    this._riotApiService.getItems()
      .map(el => el.data)
      .subscribe(items =>{
        this.items = items;
        console.log(items)
      })

  }

}
