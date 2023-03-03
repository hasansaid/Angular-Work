import { BlogPostService } from './../../../../service/blog-website-project/blog-post.service';
import { filter } from 'rxjs';
import { BlogCommentsService } from './../../../../service/blog-website-project/blog-comments.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  isUpdate: boolean = false;
  imageUrl: string = '';
  title: string = '';
  body: string = '';
  comments: any;

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
  });

  constructor(
    private blogPostService: BlogPostService,
    private blogCommentsService: BlogCommentsService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    // debugger;
    if (data.isUpdate) {
      this.isUpdate = true;
      this.form.patchValue({
        title: data.blog.title,
        body: data.blog.body,
      });
    } else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
  }

  ngOnInit(): void {
    this.blogCommentsService.getComments().subscribe((res) => {
      this.comments = res.filter(
        (x: { postId: any }) => x.postId == this.data.blog.id
      );
    });
  }

  onSubmit() {
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.data.blog.imageId,
      userId: this.data.blog.userId,
    };

    this.blogPostService
      .updatePost(this.data.blog.id, request)
      .subscribe((res) => {
        this.dialogRef.close();
      });
    // window.location.reload();
  }
  close() {
    this.dialogRef.close();
  }
}
