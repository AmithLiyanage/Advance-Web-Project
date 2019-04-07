import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';//Observable
// import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = new User();
  users: User[];
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http : HttpClient) { }

  postUser(cuser : User) {
    return this.http.post(this.baseURL, cuser);
  }

  getUserList() {
    return this.http.get(this.baseURL);
  }

  putUser(cuser: User) {
    return this.http.put(this.baseURL + `/${cuser._id}`, cuser);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}

