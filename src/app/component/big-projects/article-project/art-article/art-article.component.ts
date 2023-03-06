import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './../../../../service/article-project/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-article',
  templateUrl: './art-article.component.html',
  styleUrls: ['./art-article.component.css'],
})
export class ArtArticleComponent implements OnInit {
  article: any;
  articleid;
  username;
  comment;
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.articleid = this.activatedRoute.snapshot.paramMap.get('articleid');
    this.getArticle(this.articleid);
  }
  getArticle(id: any) {
    this.articleService.getArticle(id).subscribe((res) => {
      this.article = res;
    });
  }

  addComment() {
    let commentObj = {
      username: this.username,
      comment: this.comment,
    };
    this.article[this.articleid].comments.push(commentObj);
    this.articleService
      .updateArticle(this.article[this.article])
      .subscribe((res) => {
        this.username = '';
        this.comment = '';
      });
  }
}
