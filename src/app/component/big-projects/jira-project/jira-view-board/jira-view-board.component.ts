import { JiraBoardsService } from './../../../../service/jira-project/jira-boards.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-view-board',
  templateUrl: './jira-view-board.component.html',
  styleUrls: ['./jira-view-board.component.css'],
})
export class JiraViewBoardComponent implements OnInit {
  boardid: any = 0;
  boardTitle: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    public jiraBoardsService: JiraBoardsService
  ) {}

  ngOnInit(): void {
    this.boardid = this.activatedRoute.snapshot.paramMap.get('boardid');
    this.boardTitle = this.jiraBoardsService.boards[this.boardid].title;
  }
}
