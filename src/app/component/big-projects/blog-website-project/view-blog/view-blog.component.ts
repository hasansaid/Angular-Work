import { filter } from 'rxjs';
import { BlogCommentsService } from './../../../../service/blog-website-project/blog-comments.service';
import { BlogPostService } from './../../../../service/blog-website-project/blog-post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
})
export class ViewBlogComponent implements OnInit {
  blogid: any;
  blogPost: any;
  comments: any;
  constructor(
    private postService: BlogPostService,
    private commentsService: BlogCommentsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // İki farklı yöntem ile id yi çekebiliriz.
    // this.one();
    this.two();
  }

  getPost(id: any) {
    this.postService.getPost(id).subscribe((data) => {
      this.blogPost = data;
      this.getComment();
    });
  }
  getComment() {
    this.commentsService.getComments().subscribe((res) => {
      this.comments = res.filter(
        (x: { postId: any }) => x.postId == this.blogid
      );
    });
  }

  one() {
    this.activatedRoute.params.subscribe((params) => {
      this.getPost(params['blogid']);
    });
  }
  two() {
    this.blogid = this.activatedRoute.snapshot.paramMap.get('blogid');
    this.getPost(this.blogid);
  }
}
