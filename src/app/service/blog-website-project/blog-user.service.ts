import { Injectable } from '@angular/core';
import { BlogWebsiteService } from './blog-website.service';

@Injectable({
  providedIn: 'root',
})
export class BlogUserService extends BlogWebsiteService {
  constructor(private blogWebsiteService: BlogWebsiteService) {
    super(blogWebsiteService.httpClient);
  }

  public getUsers() {
    return this.blogWebsiteService.getReq('/users');
  }
}
