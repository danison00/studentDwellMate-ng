import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {

  @Input() formUserData!: FormGroup;
  btnRigth = false;

  markBtn() {
    this.btnRigth = !this.btnRigth;
    console.log();
  }
}
