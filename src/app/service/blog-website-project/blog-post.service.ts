import { Injectable } from '@angular/core';
import { BlogWebsiteService } from './blog-website.service';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService extends BlogWebsiteService {
  constructor(private blogWebsiteService: BlogWebsiteService) {
    super(blogWebsiteService.httpClient);
  }

  public getPosts() {
    return this.blogWebsiteService.getReq('/posts');
  }

  public getPost(id: any) {
    return this.blogWebsiteService.getReq('/posts/' + id);
  }

  public updatePost(id: any, data: any) {
    return this.blogWebsiteService.putReq('/posts/' + id, data);
  }
}
