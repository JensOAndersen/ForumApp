import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Comment } from './comment';
import { Post } from './post';
import { User } from './user';
import { map, catchError, tap } from 'rxjs/operators';

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

  // public createPost(post : Post){

  // }

  // public getPostById(id: Number){

  // }

  // public updatePost(post : Post){

  // }

  // public deletePostById(id : number){

  // }

  private handleError (error:Response|any){
    console.error('Forum-ApiService::handleError',error);
    return Observable.throw(error);
  }
}
