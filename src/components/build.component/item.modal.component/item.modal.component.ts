import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'item-modal',
  templateUrl: `item.modal.component.html`,
})
export class ItemModalComponent  {
  public visible:boolean = false;
  private visibleAnimate:boolean = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
}

