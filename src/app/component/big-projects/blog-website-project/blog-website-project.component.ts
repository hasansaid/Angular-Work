import { BlogPostService } from './../../../service/blog-website-project/blog-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-website-project',
  templateUrl: './blog-website-project.component.html',
  styleUrls: ['./blog-website-project.component.css'],
})
export class BlogWebsiteProjectComponent implements OnInit {
  posts: Array<any> = [];
  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.blogPostService.getPosts().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }
}
