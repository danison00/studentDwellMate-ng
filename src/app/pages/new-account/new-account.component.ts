import { AllProfilesComponent } from './../all-profiles/all-profiles.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataAccount } from 'src/app/model/DataAccount';
import { NewProfileService } from 'src/app/service/NewProfile.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent {
  protected viewPassword = false;
  protected value!: any;
  protected step: number = 1;
  public sendingFrom = false;
  protected acountCreateSuccess: boolean = false;

  private formNewAccount!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileServ: NewProfileService,
    private router: Router
  ) {
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
        email: [null, [Validators.required, Validators.email]],
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

    this.profileServ.newProfile(dataAccount).subscribe({
      next: (resp) => {
        this.acountCreateSuccess = true;
        this.sendingFrom = false;
        this.formNewAccount.reset();
        this.formNewAccount.disable();
      },
      error: ()=>{
        this.sendingFrom = false;
        alert("Ocorreu um erro!")

      }
    });
  }
  navigateLogin() {
    this.router.navigate(['/login']);
  }
}
