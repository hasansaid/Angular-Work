import { JiraBoardsService } from './../../../../service/jira-project/jira-boards.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { JiraBoardsDialogComponent } from '../jira-boards-dialog/jira-boards-dialog.component';

@Component({
  selector: 'app-jira-boards',
  templateUrl: './jira-boards.component.html',
  styleUrls: ['./jira-boards.component.css'],
})
export class JiraBoardsComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    public jiraBoardsService: JiraBoardsService
  ) {}

  ngOnInit(): void {}

  openNewBoardDialog() {
    let dialogRef = this.matDialog.open(JiraBoardsDialogComponent, {
      width: '500px',
    });
  }
  deleteBoard(index) {
    this.jiraBoardsService.deleteBoard(index);
  }
}
