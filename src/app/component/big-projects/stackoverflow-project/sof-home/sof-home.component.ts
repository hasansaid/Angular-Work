import { SofQuestionService } from './../../../../service/stackoverflow-project/sof-question.service';
import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sof-home',
  templateUrl: './sof-home.component.html',
  styleUrls: ['./sof-home.component.css'],
})
export class SofHomeComponent implements OnInit {
  question: string = '';
  questions: Array<any> = [];

  constructor(
    public userService: SofUserService,
    private questionService: SofQuestionService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions() {
    this.questionService.getQuestions().subscribe((res) => {
      this.questions = res;
    });
  }
  post() {
    this.questionService
      .postQuestions({
        username: this.userService.user.username,
        question: this.question,
        userId: this.userService.user.id,
        solutions: [],
      })
      .subscribe((res) => {
        this.questions.push(res);
      });
  }
}
