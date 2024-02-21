import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewAccountComponent } from '../new-account.component';
import { ProfileService } from 'src/app/service/Profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss'],
})
export class Step1Component implements OnInit, OnDestroy {
  protected viewPassword: boolean = false;
  protected submited: boolean = false;
  protected passwordNonMate = false;
  protected usernameUnavailable = false;
  protected waitResponseRequest = false;
  private usernameExistsSubscription$!: Subscription;

  @Input() formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cAcc: NewAccountComponent,
    private router: Router,
    private profileServ: ProfileService
  ) {}
  ngOnDestroy(): void {
    if (this.usernameExistsSubscription$)
      this.usernameExistsSubscription$.unsubscribe();
  }

  ngOnInit(): void {
    this.formLogin = this.cAcc.getForm().get('login') as FormGroup;
  }
  nextStep() {
    this.submited = true;

    if (this.formLogin.invalid) return;

    if (this.formLogin.value.password != this.formLogin.value.confirmPassword) {
      this.passwordNonMate = true;
      return;
    }

    this.waitResponseRequest = true;
    this.checkUsernameExists();
  }

  toogleViewPassword() {
    this.viewPassword = !this.viewPassword;
  }

  public async checkUsernameExists() {
    this.usernameExistsSubscription$ = this.profileServ
      .usernameExists(this.formLogin.value.username)
      .subscribe({
        next: (resp: any) => {
          if (resp.exists) {
            this.waitResponseRequest = false;
            this.usernameUnavailable = true;
          } else this.router.navigate(['new-account', 'step-2']);
        },
        complete: () => {
          this.waitResponseRequest = false;
          this.usernameExistsSubscription$.unsubscribe();
        },
        error: (err) => {
          this.waitResponseRequest = false;
        },
      });
  }
}
