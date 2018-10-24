import { Component, OnInit } from '@angular/core';
import { ForumAPIService } from '../forum-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : any = [];

  constructor(
    public rest:ForumAPIService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.posts = [];
    this.rest.getAllPosts().subscribe(
      (data:{}) => {
        console.log(data);
        this.posts = data;
      }
    )
  }

}
