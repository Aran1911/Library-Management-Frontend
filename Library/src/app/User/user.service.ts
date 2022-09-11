import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _http:HttpClient) { }

  baseUrl: string = "http://localhost:2000/user";

  login(username: string, password: string ): Observable<User> {
    return this._http.get<User>(this.baseUrl+"/get"+"/"+username+"/"+password).pipe(map (resp => resp));
  }

  getByEmail(email: string): Observable<User> {
    return this._http.get<User>(this.baseUrl+"/email/"+email).pipe(map( resp => resp));
  }

  update( user: User): Observable<User> {
    return this._http.put<User>(this.baseUrl+"/update/"+user.username,user).pipe(map(resp => resp));
  }
}
