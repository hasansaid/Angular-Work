import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogUserService extends BaseService {
  constructor(private baseService: BaseService) {
    super(baseService.httpClient);
  }

  public getUsers() {
    return this.baseService.getReq('/users');
  }
}
