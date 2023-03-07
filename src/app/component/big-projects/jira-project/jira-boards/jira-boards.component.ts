import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-boards',
  templateUrl: './jira-boards.component.html',
  styleUrls: ['./jira-boards.component.css'],
})
export class JiraBoardsComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openNewBoardDialog() {}
}
