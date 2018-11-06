import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

const endpoint = environment.apiUrl;
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ForumAPIService {

  constructor(
    private http:HttpClient
  ) { }

    private extractData(res : Response){
      let body = res;
      return body || { };
    }

  //Get all posts
  public getAllPosts() : Observable<any> {
    return this.http.get(endpoint+'/posts').pipe(map(this.extractData));
  }

  //Get Post by ID
  public getPostBy(id:Number){
    console.log(endpoint+'/posts/'+id);
    return this.http.get(endpoint+'/posts/'+id).pipe(map(this.extractData));
  }

  //create post
  public createPost(post:Object){
    return this.http.post<any>(endpoint+'/posts', JSON.stringify(post), httpOptions).pipe(
      tap((post) => console.log('added post w/ id='+post.id))
    );
  }

  //create comment
  public createComment(comment:Object){
    return this.http.post<any>(endpoint + '/comments',JSON.stringify(comment),httpOptions).pipe(
      //for some reason tap doesnt work?
      tap((comment) => console.log('added new comment w/ id='+comment))
    );
  }

  //delete comment
  public deleteComment(id:Number){
    return this.http.delete<any>(endpoint+'/comments/'+id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted comment with id:' + id))
      );
  }

  private handleError (error:Response|any){
    console.error('Forum-ApiService::handleError',error);
    return Observable.throw(error);
  }
}
