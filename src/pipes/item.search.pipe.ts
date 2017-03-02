import {Pipe} from "@angular/core";
@Pipe({
  name: "itemSearch"
})

export class ItemSearchPipe{
  transform(value:any, args:any){
    if(!args[0]){
      return value
    } else if(value){
      return value.filter((item:any) =>{
        item.name.startsWith(args[0]);
      });
    }
  }
}
