import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from './../../../../service/blog-website-project/blog-post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css'],
})
export class UpdateBlogComponent implements OnInit {
  blogId: any;
  blogPost: any;
  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
  });
  constructor(
    private postService: BlogPostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blogId = this.activatedRoute.snapshot.paramMap.get('blogid');
    this.postService.getPost(this.blogId).subscribe((res) => {
      this.blogPost = res;
      this.form.patchValue({
        title: this.blogPost.title,
        body: this.blogPost.body,
      });
    });
  }
  onSubmit() {
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.blogPost.imageId,
      userId: this.blogPost.userId,
    };
    this.postService.updatePost(this.blogPost.id, request).subscribe((res) => {
      this.router.navigateByUrl('/big-projects/blog-website-project');
    });
  }
}
