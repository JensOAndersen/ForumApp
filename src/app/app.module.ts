import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { CommentComponent } from './comment/comment.component';
import { Post } from './post';

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
    data:{
      post:{}
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddCommentComponent,
    PostOverviewComponent,
    CommentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
