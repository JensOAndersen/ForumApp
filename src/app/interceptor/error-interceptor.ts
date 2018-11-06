import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(private authenticationService : AuthenticationService, private router: Router){}
     

    intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
        return newRequest.handle(request).pipe(catchError((err : HttpErrorResponse) => {
            if(err.status == 401){
                this.authenticationService.logout();
            }

            const error =  err.message || err.statusText;
            console.log(error);
            return throwError(error);            
        }))
    }
    

}
