import { Router } from '@angular/router';
import { ArticleService } from './../../../../service/article-project/article.service';
import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.css'],
})
export class ArtCreateComponent implements OnInit {
  username: any = '';
  title: any = '';
  content: any = '';

  constructor(private articleService: ArticleService, private router: Router) {}

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Lütfen yazınızı giriniz',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
  };

  ngOnInit(): void {
    console.log(this.username);
  }

  postArticle() {
    let articleObj = {
      author: this.username,
      title: this.title,
      content: this.content,
      comments: [],
    };

    this.articleService.postArticle(articleObj).subscribe((res) => {
      this.router.navigateByUrl('/big-projects/article-project/art-home');
    });
  }
}
