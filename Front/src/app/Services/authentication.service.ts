import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  private dataSubject = new BehaviorSubject<boolean>(this.isTokenExists());

  // Expose the Subject as an Observable
  data$ = this.dataSubject.asObservable();
  authTokenKey = 'auth_token';

  constructor(private http:HttpClient) { 
    //this.dataSubject.next(this.isTokenExists());
  }

  ngOnInit(): void {
    
  }
  _loginUrl="http://localhost:3000/users/login";
  _signUpUrl="http://localhost:3000/users/signup";
  _logOutUrl="http://localhost:3000/users/logout";

  login(loginData: any){
    return this.http.post(this._loginUrl,loginData);
  }

  signUp(signUpData:any){
    return this.http.post(this._signUpUrl,signUpData);
  }

  logOut(){
    return this.http.delete(this._logOutUrl)
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
    this.dataSubject.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Remove the token from local storage (logout)
  removeToken(): void {
    localStorage.removeItem(this.authTokenKey);
    this.dataSubject.next(false);
  }

  // Check if the token exists in local storage
  isTokenExists(): boolean {
    return !!this.getToken();
  }

}
