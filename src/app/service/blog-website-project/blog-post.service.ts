import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService extends BaseService {
  constructor(private baseService: BaseService) {
    super(baseService.httpClient);
  }

  public getPosts() {
    return this.baseService.getReq('/posts');
  }

  public getPost(id: any) {
    return this.baseService.getReq('/posts/' + id);
  }

  public updatePost(id: any, data: any) {
    return this.baseService.putReq('/posts/' + id, data);
  }
}
