import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { NewAccountComponent } from '../new-account.component';
@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss']
})
export class Step2Component {

  @Input() formUserData!: FormGroup;
  btnRigth = false;

  constructor(private cAcc: NewAccountComponent, private router: Router) {}

  ngOnInit(): void {
    this.formUserData = this.cAcc.getForm().get('userData') as FormGroup;
    if (this.cAcc.getForm().get('login')?.invalid)
      this.router.navigate(['create-account', 'step-1']);
  }

  checkToogle() {
    this.btnRigth = !this.btnRigth;
    console.log();
  }
}
