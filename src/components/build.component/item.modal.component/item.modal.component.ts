import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'item-modal',
  templateUrl: `item.modal.component.html`,
})

export class ItemModalComponent  {
  public visible:boolean = false;
  public id:number;
  private visibleAnimate:boolean = false;


  public show(id:number): void {
    this.visible = true;
    this.id= id;
    console.log(this.id);
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
}

