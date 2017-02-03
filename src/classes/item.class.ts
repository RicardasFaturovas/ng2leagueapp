export class Item {
  id: number;
  name: string;
  gold: number;
  description: string;
  image: string;
  tags: Array<string>
  stats: Object;

  constructor(id: number, name: string,  gold: number,  description: string, image: string, tags: Array<string>, stats: Object) {
    this.id= id;
    this.name= name;
    this.gold= gold;
    this.description= description;
    this.image= image;
    this.tags = tags;
    this.stats= stats;
  }

}
