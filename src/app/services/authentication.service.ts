import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/User';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`/portal/login/`, user)

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
