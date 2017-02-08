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
        for(let key in item){
          if((typeof item[key] ==='string' || item[key] instanceof String) && (item[key].indexOf(args[0] !== -1))){
            return true;
          }
        }
      });
    }
  }
}
