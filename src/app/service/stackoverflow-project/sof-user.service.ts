import { SofBaseService } from './sof-base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SofUserService extends SofBaseService {
  user: any;

  constructor(private sofBaseService: SofBaseService) {
    super(sofBaseService.httpClient);
  }

  public createAccount(user: any) {
    return this.postReq('/users', user);
  }

  public getUser(email: any) {
    return this.getReq('/users?email=' + email);
  }
}
