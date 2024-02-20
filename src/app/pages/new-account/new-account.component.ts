import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataAccount } from 'src/app/model/DataAccount';
import { ProfileService } from 'src/app/service/Profile.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
  protected viewPassword = false;
  protected value!: any;
  protected step: number = 1;
  protected sendingFrom = false;

  private formNewAccount!: FormGroup;

  constructor(private fb: FormBuilder, private profileServ: ProfileService) {
    this.formNewAccount = this.fb.group({
      login: this.fb.group({
        username: ['null', [Validators.required]],
        password: ['null', Validators.required],
        confirmPassword: ['null', Validators.required],
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

  public sendForm() {
    if (this.sendingFrom) return;

    const formData = this.formNewAccount.value;

    const dataAccount: DataAccount = {
      name: formData.userData.name,
      faculty: formData.userData.faculty,
      course: formData.userData.course,
      age: formData.userData.age,
      email: formData.userData.email,
      instagram: formData.userData.instagram || '', // Pode ser nulo se não fornecido
      facebook: formData.userData.facebook || '', // Pode ser nulo se não fornecido
      whatsapp: formData.userData.whatsapp,
      profilePhotoUrl: formData.userData.linkPhoto,
      hasRentedProperty: false, // A propriedade hasRentedProperty é inicializada como falso
      cityOrigin: formData.userData.cityOrigin,
      wantsToSharedProperty: formData.userData.wantShare,
      user: {
        username: formData.login.username,
        password: formData.login.password,
      },
    };
    this.sendingFrom = true;

    this.profileServ.newProfile(dataAccount).subscribe({});
  }
}
