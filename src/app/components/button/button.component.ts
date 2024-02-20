import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text = "Button";
  @Input() clickLoad = false;
  @Input() bg_color: "dark-blue" | "ligth-blue" | "green" | "white" = "ligth-blue";

  @Input() load = false;

  onLoad(){
    if(!this.clickLoad) return;
    this.load = true;
  }
}
