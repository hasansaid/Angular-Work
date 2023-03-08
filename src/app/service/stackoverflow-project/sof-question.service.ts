import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SofQuestionService extends BaseService {
  constructor(private baseService: BaseService) {
    super(baseService.httpClient);
  }

  public postQuestions(question: any) {
    return this.postReq('/questions', question);
  }

  public getQuestions() {
    return this.getReq('/questions');
  }

  public getQuestion(questionid: any) {
    return this.getReq('/questions/' + questionid);
  }

  public updateQuestion(newQuestion: any) {
    return this.putReq('/questions/' + newQuestion.id, newQuestion);
  }

  public deleteQuestion(id) {
    return this.deleteReq('/questions/' + id);
  }
}
