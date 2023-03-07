import { BlogUserService } from './../../../../service/blog-website-project/blog-user.service';
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
  users: any = [];
  commentId: any;
  constructor(
    private postService: BlogPostService,
    private commentsService: BlogCommentsService,
    private userService: BlogUserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // İki farklı yöntem ile id yi çekebiliriz.
    // this.one();
    this.two();
    // this.getUser();

    // console.log(this.users);
  }
  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      // console.log(res);
      this.users = res;
    });
  }

  getPost(id: any) {
    this.postService.getPost(id).subscribe((data) => {
      this.blogPost = data;
      this.getComment();
      this.getUsers();
    });
  }
  getComment() {
    this.commentsService.getComments().subscribe((res) => {
      this.comments = res.filter(
        (x: { postId: any }) => x.postId == this.blogid
      );

      // this.userService.getUsers().subscribe((res) => {
      //   // special code.. don't steal (:
      //   res.filter((x: { id: any }) => {
      //     this.comments.forEach((element) => {
      //       if (x.id == element.userId) {
      //         this.users.push(x);
      //       }
      //     });
      //   });
      // });
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

  direction() {}
}
