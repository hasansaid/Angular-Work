import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SofUserService extends BaseService {
  user: any;

  constructor(private baseService: BaseService) {
    super(baseService.httpClient);
  }

  public createAccount(user: any) {
    return this.postReq('/sofusers', user);
  }

  public getUser(email: any) {
    return this.getReq('/sofusers?email=' + email);
  }
}
