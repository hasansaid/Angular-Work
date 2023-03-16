import { MatSnackBar } from '@angular/material/snack-bar';
import { JiraBoardsService } from './../../../../service/jira-project/jira-boards.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-jira-card-dialog',
  templateUrl: './jira-card-dialog.component.html',
  styleUrls: ['./jira-card-dialog.component.css'],
})
export class JiraCardDialogComponent implements OnInit {
  constructor(
    private jiraBoardsService: JiraBoardsService,
    private dialogRef: MatDialogRef<JiraCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matSnackBar: MatSnackBar
  ) {}
  title: string = '';
  tasks: Array<string> = [''];
  tasksLoop: any = [false];

  ngOnInit(): void {
    let a = this.data;
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.tasksLoop.splice(i, 1);
  }

  addTask() {
    this.tasks.push('');
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }

  create() {
    if (this.tasks.some((element: string) => element === '')) {
      this.matSnackBar.open('Add New Task', 'Ok');
    } else {
      this.jiraBoardsService.boards[this.data.boardid].cards.push({
        title: this.title,
        checklist: this.tasks,
        status: this.tasksLoop,
      });
      this.jiraBoardsService.updateToLocalstorage();
      this.close();
    }
  }
}
