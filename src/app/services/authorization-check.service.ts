import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationCheckService {

  constructor(
    private router : Router
  ) {}

  //why do i need the route?
  canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot){
    
    if(localStorage.getItem('TokenInfo')){
      return true;
    }

    this.router.navigate(['/posts'], {queryParams:{returnUrl : state.url}});

    return false; 
  }
}
