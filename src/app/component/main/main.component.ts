import { TranslateService } from './../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  eng: boolean;
  constructor(public translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}
  translateTr() {
    this.translateService.eng = false;
    this.translateService.use('tr');
  }
  translateEn() {
    this.translateService.eng = true;
    this.translateService.use('en');
  }
}
