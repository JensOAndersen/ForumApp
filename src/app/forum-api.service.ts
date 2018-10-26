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

  public getAllPosts() : Observable<any> {
    return this.http.get(endpoint+'/posts').pipe(map(this.extractData));
  }

  public createPost(post){
    console.log(post);
    return this.http.post<any>(endpoint+'/posts', JSON.stringify(post), httpOptions).pipe(
      tap((post) => console.log('added post w/ id=${post.id}'))
    );
  }

  public createComment(comment){
    console.log(comment);
    return this.http.post<any>(endpoint + '/comments',JSON.stringify(comment),httpOptions).pipe(
      tap((comment) => console.log('added new comment w/ id=${comment.id}'))
    );
  }

  private handleError (error:Response|any){
    console.error('Forum-ApiService::handleError',error);
    return Observable.throw(error);
  }
}
