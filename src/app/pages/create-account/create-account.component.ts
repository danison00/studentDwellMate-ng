import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  viewPassword = false;
  value!: any;
  step: number = 1;

  private formNewAccount!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formNewAccount = this.fb.group({
      login: this.fb.group({
        username: [null, [Validators.required]],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
      }),
      userData: this.fb.group({
        linkPhoto: [null, Validators.required],
        name: [null, Validators.required],
        age: [null, Validators.required],
        faculty: [null, Validators.required],
        course: [null, Validators.required],
        cityCurrent: [null, Validators.required],
        cityOrigin: [null, Validators.required],
        email: [null, Validators.required],
        instagram: [null],
        facebook: [null],
        whatsapp: [null, Validators.required],
        wantShare: [false],
      }),
    });
  }

  public getForm(): FormGroup {
    return this.formNewAccount;
  }

  open() {
    this.viewPassword = !this.viewPassword;
  }

  nextStep() {
    console.log(this.formNewAccount.value);

    this.step += 1;
    const stepOne = document.getElementById('step-one');
    const stepTwo = document.getElementById('step-two');

    if (this.step == 1) {
      if (stepTwo && stepOne) {
        stepTwo.style.display = 'none';
        stepOne.style.display = 'block';
      }
    }
    if (this.step == 2) {
      if (stepTwo && stepOne) {
        stepTwo.style.display = 'block';
        stepOne.style.display = 'none';
      }
    }
  }
 
}
