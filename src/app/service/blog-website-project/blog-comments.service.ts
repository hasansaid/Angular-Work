import { Injectable } from '@angular/core';
import { BlogWebsiteService } from './blog-website.service';

@Injectable({
  providedIn: 'root',
})
export class BlogCommentsService extends BlogWebsiteService {
  constructor(private blogWebsiteService: BlogWebsiteService) {
    super(blogWebsiteService.httpClient);
  }

  public getComments() {
    return this.blogWebsiteService.getReq('/comments');
  }
}
