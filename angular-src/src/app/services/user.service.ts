import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:8080';

  public getAllUsers(): Observable<User[]> {
    const URI = `${this.serverApi}/users`;

    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <User[]>res);
      // .map(res => <User[]>res.users);
  }

  public deleteUser(userId: string) {
    const URI = `${this.serverApi}/users/${userId}`;

    const headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return this.http.delete(URI, { headers })
      .map(res => res.json());
  }

  public addUser(user: User) {
    const URI = `${this.serverApi}/users`;
    const headers = new Headers;
    const body = JSON.stringify(user);

    headers.append('Content-Type', 'application/json');

    return this.http.post(URI, body, { headers })
      .map(res => res.json());
  }

}
