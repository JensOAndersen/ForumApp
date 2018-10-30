import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

//@Injectable()

const endpoint = environment.apiUrl;

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username : String, password : String){
    return this.http.post<any>(endpoint + '/login',{username, password})
      .pipe(map(user => {
        if(user && user.token){
          localStorage.setItem('TokenInfo',JSON.stringify(user));
        }
      }));
  }

  logout(){
    localStorage.removeItem('TokenInfo');
  }
}
