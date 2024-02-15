import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateAccountComponent } from '../create-account.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  @Input() formUserData!: FormGroup;
  btnRigth = false;

  constructor(private cAcc: CreateAccountComponent, private router: Router) {}

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
