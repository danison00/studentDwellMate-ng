import { MyProfileServiceService } from './../../service/my-profile-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/model/Profile.interface';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  protected profile!: Profile;
  private getProfileByIdSub$!: Subscription;
  protected waitingReq = false;
  protected nameFormated = "";
  constructor(
    private actRout: ActivatedRoute,
    private profileServ: MyProfileServiceService
  ) {}
  ngOnInit(): void {
    const id = this.actRout.snapshot.paramMap.get('id');

    if (!id) 
      return alert('Ocorreu um erro com a url atual');
    
    
    this.waitingReq = true;
    this.getProfileByIdSub$ = this.profileServ
      .getProfileById(parseInt(id))
      .subscribe({
        next: (profile: Profile) => {
          this.profile = profile;
          this.waitingReq = false;
          this.formatName(profile.name);
        },
      });
  }

  formatName(name: string){
    const nameArray = name.split(' ')
    this.nameFormated = nameArray[0]+' '+nameArray[nameArray.length-1]
    console.log(this.nameFormated);
    
  } 
}
