import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-boards-dialog',
  templateUrl: './jira-boards-dialog.component.html',
  styleUrls: ['./jira-boards-dialog.component.css'],
})
export class JiraBoardsDialogComponent implements OnInit {
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });
  constructor(private matDialogRef: MatDialogRef<JiraBoardsDialogComponent>) {}

  ngOnInit(): void {}

  close() {
    this.matDialogRef.close();
  }
  create() {}
}
