import { MatSnackBar } from '@angular/material/snack-bar';
import { SofUserService } from './../../../../service/stackoverflow-project/sof-user.service';
import { ActivatedRoute } from '@angular/router';
import { SofQuestionService } from './../../../../service/stackoverflow-project/sof-question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sof-solutions',
  templateUrl: './sof-solutions.component.html',
  styleUrls: ['./sof-solutions.component.css'],
})
export class SofSolutionsComponent implements OnInit {
  question: any;
  questionid: any;

  solutionText: string = '';

  constructor(
    public userService: SofUserService,
    private questionService: SofQuestionService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.questionid = this.activatedRoute.snapshot.paramMap.get('questionid');
    this.getQuestion(this.questionid);
  }

  getQuestion(questionid: any) {
    this.questionService.getQuestion(questionid).subscribe((res) => {
      this.question = res;
    });
  }

  postSolutions() {
    let solutionsObj = {
      id: (this.questionService.counter += 1),
      username: this.userService.user.username,
      solution: this.solutionText,
      plus: [],
      minus: [],
    };

    this.question.solutions.push(solutionsObj);
    this.questionService.updateQuestion(this.question).subscribe((res) => {
      this.solutionText = '';
    });
  }
  delete(id) {
    let srt = this.question.solutions.indexOf(id);
    this.question.solutions.splice(srt, 1);
    this.questionService.updateQuestion(this.question).subscribe((res) => {
      this.matSnackBar.open('Solution deleted', 'Ok');
    });
  }

  plusOne(index: number, point: number) {
    let userId = this.userService.user.id;
    let solution = this.question.solutions[index];

    if (point == 1) {
      if (!(solution.plus.indexOf(userId) >= 0)) {
        solution.plus.push(userId);
        this.matSnackBar.open('Plus points given', '+ OK');
      }

      for (let i = 0; i < solution.minus.length; i++) {
        if (solution.minus[i] == userId) {
          solution.minus.splice(i, 1);
        }
      }
    } else {
      if (!(solution.minus.indexOf(userId) >= 0)) {
        solution.minus.push(userId);
        this.matSnackBar.open('Minus points given', '- OK');
      }
      for (let i = 0; i < solution.plus.length; i++) {
        if (solution.plus[i] == userId) {
          solution.plus.splice(i, 1);
        }
      }
    }

    this.questionService.updateQuestion(this.question).subscribe((res) => {
      this.solutionText = '';
    });
  }

  condition() {
    return this.solutionText.trim() === '';
  }
}
