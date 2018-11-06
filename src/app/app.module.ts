import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { httpInterceptor } from './interceptor/http-interceptor';
import { ErrorInterceptor } from './interceptor/error-interceptor';
import { TimeoutError } from 'rxjs';
import { AuthorizationCheckService } from './services/authorization-check.service';
import { AuthenticationService } from './services/authentication.service';

const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'/posts',
    pathMatch: 'full'
  },
  {
    path :'posts',
    component : PostOverviewComponent,
    data:{title:'Post'}

  },
  {
    path : 'post/:id', 
    component : PostComponent,
    canActivate: [AuthorizationCheckService] 
  },
  {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddCommentComponent,
    PostOverviewComponent,
    CommentComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : httpInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ErrorInterceptor, multi : true},
    AuthorizationCheckService, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
