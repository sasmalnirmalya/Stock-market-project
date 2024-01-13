import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  _loginUrl="http://localhost:3000/users/login";
  _signUpUrl="http://localhost:3000/users/signup";

  login(loginData: any){
    return this.http.post(this._loginUrl,loginData);
  }

  signUp(signUpData:any){
    return this.http.post(this._signUpUrl,signUpData);
  }

}
