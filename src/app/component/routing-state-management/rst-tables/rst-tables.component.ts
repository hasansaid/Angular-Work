import { TranslateService } from './../../../service/translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rst-tables',
  templateUrl: './rst-tables.component.html',
  styleUrls: ['./rst-tables.component.css'],
})
export class RstTablesComponent implements OnInit {
  datas = [
    {
      name: 'Jhon',
      age: 23,
      job: 'Computer Engineer',
      jobTr: 'Bilgisayar Mühendisi',
      employed: 'No',
      employedTr: 'Hayır',
    },
    {
      name: 'Jack',
      age: 42,
      job: 'Software Engineer',
      jobTr: 'Yazılım Mühendisi',
      employed: 'No',
      employedTr: 'Hayır',
    },
    {
      name: 'Will',
      age: 38,
      job: 'Industrial Engineer',
      jobTr: 'Endüstri Mühendisi',
      employed: 'Yes',
      employedTr: 'Evet',
    },
  ];
  headers = [
    { key: 'name', label: 'Fullname', labelTr: 'İsim' },
    { key: 'age', label: 'Age', labelTr: 'Yaş' },
    { key: 'job', label: 'Job', labelTr: 'İş' },
    {
      key: 'employed',
      label: 'Is he/she satisfied with his/her salary?',
      labelTr: 'Aldığı maaştan memnun mu?',
    },
  ];

  eng: boolean;
  constructor(private translateService: TranslateService) {
    this.eng = translateService.eng;
  }

  ngOnInit(): void {}
}
