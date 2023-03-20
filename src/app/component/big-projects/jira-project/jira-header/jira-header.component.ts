import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-header',
  templateUrl: './jira-header.component.html',
  styleUrls: ['./jira-header.component.css']
})
export class JiraHeaderComponent implements OnInit {

  constructor(public userService: SofUserService) { }

  ngOnInit(): void {
  }

  leave() {
    this.userService.user = undefined;
    localStorage.clear();
  }

}
