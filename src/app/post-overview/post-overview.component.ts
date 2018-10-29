import { Component, OnInit, Input } from '@angular/core';
import {ForumAPIService } from '../forum-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent implements OnInit {


  posts : any = [];

  constructor(
    public rest:ForumAPIService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.posts = [];
    this.rest.getAllPosts().subscribe(
      (data:{}) => {
        this.posts = data;
      }
    )
  }

}
