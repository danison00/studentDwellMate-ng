import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/model/Profile.interface';
import { MyProfileServiceService } from 'src/app/service/my-profile-service.service';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.scss'],
})
export class AllProfilesComponent implements OnInit, OnDestroy {
  profiles!: Profile[];
  getAllProfilesSubs$!: Subscription;
  protected waitingReq = false;

  constructor(private myProfileServ: MyProfileServiceService) {}
  ngOnDestroy(): void {
    this.getAllProfilesSubs$.unsubscribe();
  }
  ngOnInit(): void {
    this.waitingReq = true
    this.getAllProfilesSubs$ = this.myProfileServ.getAllProfiles().subscribe({
      next: (profiles: Profile[]) => {
        this.profiles = profiles;
        this.waitingReq = false;
      },
    });
  }
}
