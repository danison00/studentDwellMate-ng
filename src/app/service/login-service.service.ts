import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(user: User) {
    return this.http
      .post('http://localhost:8080/api/public/auth/login', user, {
        observe: 'response',
        withCredentials: true,
      });
  }
}
