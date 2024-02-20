import { Subject, Subscription, catchError } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  loginSubscription$!: Subscription;

  usernameOrPasswordInvalid = false;
  viewPassword = false;
  waitResponserequest = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginServ: LoginService
  ) {}
  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  open() {
    this.viewPassword = !this.viewPassword;
  }

  login() {
    if (this.formLogin.invalid) return;

    this.waitResponserequest = true;

    const login = this.formLogin.value;
    this.loginSubscription$ = this.loginServ
      .login({ username: login.username, password: login.password })
      .subscribe({
        next: (r) => {
          this.loginSubscription$.unsubscribe();
          this.router.navigate(['/home']);
        },

        error: (e) => {
          if (e.status === 400) {
            this.usernameOrPasswordInvalid = true;
          }

          console.log(e.status);
          this.loginSubscription$.unsubscribe();

          this.waitResponserequest = false;
        },
        complete: () => {
          this.waitResponserequest = false;
          console.log('compleat');
        },
      });
  }
}
