import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './add-comment/add-comment.component';

const appRoutes: Routes = [
  {
    path :'posts',
    component : PostComponent,
    data:{title:'Post'} 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddCommentComponent
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
