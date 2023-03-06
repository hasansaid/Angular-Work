import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogCommentsService extends BaseService {
  constructor(private baseService: BaseService) {
    super(baseService.httpClient);
  }

  public getComments() {
    return this.baseService.getReq('/comments');
  }
}
