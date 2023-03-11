import { TranslateService } from './service/translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';

  constructor(private translateService: TranslateService) {
    translateService.translateLanguage();
  }
}
