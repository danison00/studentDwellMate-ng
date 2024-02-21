import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataAccount } from '../model/DataAccount';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  public newProfile(dataAccount: DataAccount) {
    return this.http.post(
      'http://localhost:8080/api/public/profile/new-profile',
      dataAccount,
      { observe: 'response' }
    );
  }

  public usernameExists(username: string) {
    return this.http.get(
      'http://localhost:8080/api/public/exists/username?username=' + username
    );
  }
  public emailExists(email: string) {
    return this.http.get(
      'http://localhost:8080/api/public/exists/email?email=' + email
    );
  }
}
