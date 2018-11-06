import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router, ActivatedRoute } from '@angular/router';


const endpoint = environment.apiUrl;

@Injectable({
  providedIn:'root'
})
export class AuthenticationService {

  private returnUrl : String = '';

  constructor(private http: HttpClient,
              private route : ActivatedRoute,
              private router : Router) { }

  login(name : String, password : String){
    return this.http.post<any>(endpoint + '/login',{name, password})
      .pipe(map(user => {
        if(user && user.token){

          localStorage.setItem('TokenInfo',JSON.stringify(user.token));
          localStorage.setItem('userInfo', user.user);
        }
      }));
  }s

  logout(){
    localStorage.removeItem('TokenInfo');
    localStorage.removeItem('userInfo');
  }
}
