import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private formbuilder : FormBuilder,
    private authenticationService : AuthenticationService,
    private router : Router,
    private route : ActivatedRoute
  ) { }
    
  loginForm :FormGroup;

  submitClick = false;
  submitted = false;
  returnUrl : String;
  error = '';

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      name :['', Validators.required],
      password : ['',Validators.required]
    })

    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ||'/';
  }

  onLogin(){
    if(this.loginForm.invalid){
      return;
    }
    this.submitClick = true;
    this.authenticationService.login(this.loginForm.controls.name.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.submitClick = false;
        }
      );
  }
}
