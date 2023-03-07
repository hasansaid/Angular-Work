import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { JiraBoardsDialogComponent } from '../jira-boards-dialog/jira-boards-dialog.component';

@Component({
  selector: 'app-jira-boards',
  templateUrl: './jira-boards.component.html',
  styleUrls: ['./jira-boards.component.css'],
})
export class JiraBoardsComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openNewBoardDialog() {
    let dialogRef = this.matDialog.open(JiraBoardsDialogComponent, {
      width: '500px',
    });
  }
}
