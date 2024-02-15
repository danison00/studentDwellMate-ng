import { CreateAccountComponent } from './../create-account.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {

  protected viewPassword: boolean = false;
  protected submited: boolean = false;
  @Input() formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private cAcc: CreateAccountComponent, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.cAcc.getForm().get('login') as FormGroup;
    
  }
  nextStep() {
    
    this.submited = true;
    if(this.formLogin.invalid) return;
    this.router.navigate(['create-account', 'step-2']);

    
  }

  toogleViewPassword() {
   
    this.viewPassword = !this.viewPassword;
  }

}
