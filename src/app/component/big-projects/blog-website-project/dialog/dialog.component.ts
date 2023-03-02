import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    // debugger;
    if (data.isUpdate) {
      this.isUpdate = true;
    } else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
