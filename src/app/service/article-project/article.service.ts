import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends BaseService {
  constructor(private baseService: BaseService) {
    super(baseService.httpClient);
  }

  public postArticle(data: any) {
    return this.postReq('/articles', data);
  }

  public getArticles() {
    return this.getReq('/articles');
  }

  public getArticle(articleid: any) {
    return this.getReq('/articles/' + articleid);
  }

  public updateArticle(data: any) {
    return this.putReq('/articles/' + data.id, data);
  }
}
