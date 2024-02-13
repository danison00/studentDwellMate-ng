import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  viewPassword = false;

  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5)]],
      password: [null, Validators.required],
    });
  }

  open() {
    this.viewPassword = !this.viewPassword;
  }

  login() {
    if (this.formLogin.invalid) return;
    this.router.navigate(['/home']);
  }
}
