import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/model/Profile.interface';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
})
export class CardProfileComponent {
  @Input() profile!: Profile;
}
