import { ProfileService } from 'src/app/service/Profile.service';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewAccountComponent } from '../new-account.component';
@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss'],
})
export class Step2Component implements OnInit, OnDestroy {
  @Input() formUserData!: FormGroup;
  @Output() sendFormEvent = new EventEmitter<void>();

  protected btnRigth = false;
  protected formSubmited = false;
  protected emailExists = false;

  constructor(
    private cAcc: NewAccountComponent,
    private router: Router,
    private profileServ: ProfileService
  ) {}
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.formUserData = this.cAcc.getForm().get('userData') as FormGroup;
    if (this.cAcc.getForm().get('login')?.invalid)
      this.router.navigate(['create-account', 'step-1']);
  }

  checkToogle() {
    this.btnRigth = !this.btnRigth;
    console.log();
  }

  validateFormNsend() {
    this.formSubmited = true;
    if (this.formUserData.invalid) return;
    if (
      this.formUserData.get('facebook')?.value == null &&
      this.formUserData.get('instagram')?.value == null
    )
      return alert('Adicione pelo menos uma rede social');

    this.profileServ.emailExists(this.formUserData.value.email).subscribe({
      next: (resp: any) => {
        if (resp.exists) {
          this.emailExists = true;
        } else {
          this.cAcc.sendForm();
        }
      },
    });
  }
}
