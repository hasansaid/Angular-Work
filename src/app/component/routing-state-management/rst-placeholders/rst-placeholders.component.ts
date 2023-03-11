import { TranslateService } from './../../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-placeholders',
  templateUrl: './rst-placeholders.component.html',
  styleUrls: ['./rst-placeholders.component.css'],
})
export class RstPlaceholdersComponent implements OnInit {
  eng: boolean;

  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}
}
