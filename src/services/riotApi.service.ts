import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {filter} from "rxjs/operator/filter";

@Injectable()
export class RiotApiService {
  private itemsUrl: string;
  private itemUrl: string;
  private itemId: string;
  private developerKey: string = 'RGAPI-EAF47474-4678-405C-A6E0-0EB899731794';

  constructor(private _http:Http){

  }
  getItems(){
    this.itemsUrl = `https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?itemListData=all&api_key=${this.developerKey}`
    return this._http.get(this.itemsUrl)
      .map(res => res.json())
  }

  getItem(itemId: string){
    this.itemUrl = `https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item?${itemId}&api_key=${this.developerKey}`
    return this._http.get(this.itemUrl)
      .map(res => res.json())

  }
}
