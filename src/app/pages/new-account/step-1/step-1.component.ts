import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateAccountComponent } from '../../create-account/create-account.component';
import { Router } from '@angular/router';
import { NewAccountComponent } from '../new-account.component';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss']
})
export class Step1Component {


  protected viewPassword: boolean = false;
  protected submited: boolean = false;
  @Input() formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private cAcc: NewAccountComponent, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.cAcc.getForm().get('login') as FormGroup;
    
  }
  nextStep() {
    
    this.submited = true;
    if(this.formLogin.invalid) return;
    this.router.navigate(['new-account', 'step-2']);

    
  }

  toogleViewPassword() {
   
    this.viewPassword = !this.viewPassword;
  }
}
