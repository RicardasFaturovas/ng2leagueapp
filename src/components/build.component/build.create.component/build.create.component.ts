import {Component, ViewChild} from "@angular/core";
import {RiotApiService} from "../../../services/riotApi.service";
import 'rxjs/Rx'
import {Item} from "../../../classes/item.class";
import {ItemModalComponent} from "../item.modal.component/item.modal.component";


@Component({
  moduleId: module.id,
  selector: 'build-create',
  templateUrl: 'build.create.component.html',
})
export class BuildCreateComponent  {
  @ViewChild(ItemModalComponent)
  public readonly modal: ItemModalComponent;

  items: Item[];
  itemSlots: Item[] = Array(6);
  itemImages: Array<any>;
  imageLink: string = `http://ddragon.leagueoflegends.com/cdn/7.2.1/img/item/`;

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
