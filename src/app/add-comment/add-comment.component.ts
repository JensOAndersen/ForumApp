import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    public rest:ForumAPIService,
    public router:Router,
    public activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
  }
  private post(){

    this.comment.postId = this.postinfo.postId;
    this.comment.user.userId = this.postinfo.user.userId;


    console.log(this.comment);
    if(this.comment.content != ""){
      this.rest.createComment(this.comment).subscribe((res)=> {
        console.log("Comment posted successfully");
      }, 
        (err) => {console.log(err);
      });
    } else {
      console.log("Cant post empty string");
    }
  }

}
