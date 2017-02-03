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
  items: Item[];
  itemSlots: Item[] = Array(6);
  itemImages: Array<any>;
  imageLink: string = `http://ddragon.leagueoflegends.com/cdn/6.16.2/img/item/`;

  constructor(private _riotApiService: RiotApiService){

  }

  addItem(item: Item, slotNumber: number){
    this.itemSlots[slotNumber] = item;
  }

  removeItem(slotNumber: number){
    this.itemSlots[slotNumber] = null;
  }

  // formats the items json to display properly
  formatItems(items: Object){
    return Object.keys(items)
      .map(key => items[key])
      .map(item => new Item(item.id, item.name, item.gold.total, item.description, `${this.imageLink}${item.id}.png`, item.tags, item.stats));
  }
  ngOnInit() {
    this._riotApiService.getItems()
      .map(el => el.data)
      .subscribe(
        items => {
          this.items = this.formatItems(items);
          console.log(this.items);
        },
        error => console.log(error))
  }
}
