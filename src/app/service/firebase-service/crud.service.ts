import { BlogPost } from './../../model/blog-website/blog-post';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Tekli ve çoklu veri işlemleri..

  // Blog-website post endpoint..
  postRef: AngularFireObject<any>;
  postsRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {}

  // Blog-website post işlemleri..
  getPost(id: number) {
    this.postRef = this.db.object('/blogWebsite/posts/' + id);
    return this.postRef;
  }
}
