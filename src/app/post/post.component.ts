import { Component, OnInit } from '@angular/core';
import { ForumAPIService } from '../forum-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  

  post : any = {};

  constructor(
    public rest:ForumAPIService,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location
  ) { }

  ngOnInit() {
    this.getPost();
  }
  
  getPost():void
  {
    const id = +this.route.snapshot.paramMap.get('id');

    this.rest.getPostBy(id)
    .subscribe(
      (data:{}) => {
        this.post = data;

        console.log(this.post);
      }
    );
  }

  deleteComment(id:Number){
    this.rest.deleteComment(id).subscribe(
      res => {
        this.getPost();
      }
    );
  }

  commentPosted(){
    this.getPost();
  }

  goBack(){
    this.location.back();
  }
}
