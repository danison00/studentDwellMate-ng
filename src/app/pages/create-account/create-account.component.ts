import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  viewPassword = false;

  open() {
    console.log('dads');
    this.viewPassword = !this.viewPassword;
  }
}
