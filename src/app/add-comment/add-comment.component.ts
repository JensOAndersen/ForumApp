import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ForumAPIService } from '../forum-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { createWiresService } from 'selenium-webdriver/firefox';



@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})



export class AddCommentComponent implements OnInit {
  
  @Input() postinfo = {
    postId:0,
    user:{
      userId : 0
    }
  }

  @Input() comment = {
    content:'',
    user:{
      userId:0
    },
    postId:0
  };

  returnComment : any = {};

  constructor(
    public rest:ForumAPIService,
    public router:Router,
    public activatedRoute:ActivatedRoute
  ) { }

  private counter : String = "123";

  ngOnInit() {
  }

  private post(){
    this.comment.postId = this.postinfo.postId;
    this.comment.user.userId = JSON.parse(localStorage.getItem('userInfo'));

    console.log(this.comment);
    if(this.comment.content != ""){
      this.rest.createComment(this.comment).subscribe((res)=> {
        console.log("Comment posted successfully");

        this.returnComment = this.comment;

        this.commentPosted.emit(this.returnComment);
      }, 
        (err) => {console.log(err);
      });
    } else {
      console.log("Cant post empty string");
    }
  }

  @Output() commentPosted : EventEmitter<any> = new EventEmitter();
}