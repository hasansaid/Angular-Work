import { TranslateService } from './../../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-home',
  templateUrl: './rst-home.component.html',
  styleUrls: ['./rst-home.component.css'],
})
export class RstHomeComponent implements OnInit {
  content: string =
    'The routing process allows you to dynamically update different pages and sections on a single page within your application. Another feature is that it provides manageability and ease of access by providing a distributed architecture in the project.';
  contentTr: string =
    'Yönlendirme işlemi, uygulamanız içindeki farklı sayfaları ve bölümleri tek bir sayfada dinamik olarak güncellemenizi sağlar. Diğer bir özelliği ise projede dağıtık bir mimari sağlayarak yönetilebilirlik ve erişim kolaylığı sağlamasıdır.';
  eng: boolean;

  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}
}
