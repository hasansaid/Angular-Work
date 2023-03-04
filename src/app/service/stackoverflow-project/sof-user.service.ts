import { SofBaseService } from './sof-base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SofUserService extends SofBaseService {
  constructor(private sofBaseService: SofBaseService) {
    super(sofBaseService.httpClient);
  }

  public createAccount(user: any) {
    return this.postReq('/users', user);
  }
}
