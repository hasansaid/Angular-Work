import { ArticleService } from './../../../../service/article-project/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-home',
  templateUrl: './art-home.component.html',
  styleUrls: ['./art-home.component.css'],
})
export class ArtHomeComponent implements OnInit {
  articles: Array<any> = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((res) => {
      console.log(res);
      this.articles = res;
    });
  }
}
