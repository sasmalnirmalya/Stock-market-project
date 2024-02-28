import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  private dataSubject = new BehaviorSubject<boolean>(this.isTokenExists());
  baseUrl = environment.baseUrl;

  // Expose the Subject as an Observable
  data$ = this.dataSubject.asObservable();
  authTokenKey = 'auth_token';

  constructor(private http:HttpClient) { 
    //this.dataSubject.next(this.isTokenExists());
  }

  ngOnInit(): void {
    
  }
  _loginUrl= this.baseUrl+"/users/login";
  _signUpUrl=this.baseUrl+"/users/signup";
  _logOutUrl=this.baseUrl+"/users/logout";

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
    localStorage.removeItem('User Details');
    this.dataSubject.next(false);
  }

  // Check if the token exists in local storage
  isTokenExists(): boolean {
    return !!this.getToken();
  }

  setUserDetails(user:any){
    localStorage.setItem('User Details', JSON.stringify(user));
  }

  getUserDetails():any{
    let item:any= localStorage.getItem('User Details');
    return JSON.parse(item);
  }

}
