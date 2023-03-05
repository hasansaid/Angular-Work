import { SofBaseService } from './sof-base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SofQuestionService extends SofBaseService {
  constructor(private sofBaseService: SofBaseService) {
    super(sofBaseService.httpClient);
  }

  public postQuestions(question: any) {
    return this.postReq('/questions', question);
  }

  public getQuestions() {
    return this.getReq('/questions');
  }
}
